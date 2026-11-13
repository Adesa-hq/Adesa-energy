import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { once } from "node:events";
import { createContactHandler } from "../lib/contact-handler.mjs";

const env = { RESEND_CONTACT_API_KEY: "test-only-key", RESEND_FROM: "website@example.com", TURNSTILE_SECRET_KEY: "test-only-secret", NEXT_PUBLIC_TURNSTILE_SITE_KEY: "test-only-sitekey" };
const valid = { name: "Visitor & Co", email: "visitor@example.com", phone: "+234 800 123 4567", subject: "Partnership", message: "Hello <script>alert('x')</script>\nPlease contact me.", consent: true, website: "", turnstileToken: "test-token" };
const request = (body = valid, options = {}) => new Request("http://localhost:3002/api/contact", { method: "POST", headers: { "Content-Type": "application/json", Origin: "http://localhost:3002", ...options.headers }, body: typeof body === "string" ? body : JSON.stringify(body) });
const quiet = { info() {}, error() {} };
function setup(overrides = {}) {
  const sent = [];
  let verified = 0;
  const handler = createContactHandler({ env, logger: quiet, now: () => new Date("2026-11-11T12:00:00Z"), fetchImpl: async () => { verified++; return Response.json({ success: true, hostname: "localhost", action: "contact" }); }, sendEmail: async payload => { sent.push(payload); return { data: { id: "accepted-test-message" }, error: null }; }, ...overrides });
  return { handler, sent, get verified() { return verified; } };
}

test("accepted enquiry is addressed correctly, includes all fields and escapes HTML", async () => {
  const { handler, sent } = setup();
  const res = await handler(request());
  assert.equal(res.status, 200); assert.equal((await res.json()).status, "success");
  assert.equal(res.headers.get("cache-control"), "no-store");
  assert.deepEqual(sent[0].to, ["adeinfo@adesahq.com"]); assert.equal(sent[0].replyTo, valid.email);
  assert.equal(sent[0].from, "Adesa Energy Contact <website@example.com>");
  assert.match(sent[0].html, /Visitor &amp; Co/); assert.match(sent[0].html, /&lt;script&gt;/); assert.doesNotMatch(sent[0].html, /<script>/);
  for (const text of [valid.name, valid.email, valid.phone, valid.subject, valid.message, "11 November 2026", "13:00:00", "Africa/Lagos"]) assert.ok(sent[0].text.includes(text), text);
});

for (const [label, change] of [
  ["whitespace name", { name: "   " }], ["bad email", { email: "invalid" }],
  ["header injection", { subject: "Hi\r\nBcc: attacker@example.com" }], ["oversize field", { message: "x".repeat(5001) }],
  ["invalid phone", { phone: "<img>" }], ["no consent", { consent: false }], ["honeypot", { website: "spam.example" }],
]) test(`rejects ${label} before contacting providers`, async () => {
  const state = setup(); const res = await state.handler(request({ ...valid, ...change }));
  assert.equal(res.status, 400); assert.equal(state.sent.length, 0); assert.equal(state.verified, 0);
});

test("rejects missing challenge without sending email", async () => {
  const state = setup(); assert.equal((await state.handler(request({ ...valid, turnstileToken: "" }))).status, 400); assert.equal(state.sent.length, 0);
});
for (const result of [{ success: false }, { success: true, action: "other", hostname: "localhost" }, { success: true, action: "contact", hostname: "attacker.example" }]) test(`rejects failed/mismatched challenge ${JSON.stringify(result)}`, async () => {
  const state = setup({ fetchImpl: async () => Response.json(result) });
  assert.equal((await state.handler(request())).status, 400); assert.equal(state.sent.length, 0);
});
test("verification outage fails closed", async () => {
  const state = setup({ fetchImpl: async () => { throw Error("timeout"); } });
  assert.equal((await state.handler(request())).status, 503); assert.equal(state.sent.length, 0);
});
for (const result of [{ data: null, error: { name: "validation_error", message: "private provider detail" } }, { data: {}, error: null }]) test("provider rejection or missing acceptance ID cannot report success", async () => {
  const { handler } = setup({ sendEmail: async () => result }); const response = await handler(request());
  assert.equal(response.status, 502); assert.equal((await response.json()).status, "error");
});
test("provider network failure returns a safe error", async () => {
  const { handler } = setup({ sendEmail: async () => { throw Error("private secret"); } });
  const res = await handler(request()); assert.equal(res.status, 502); assert.doesNotMatch(await res.text(), /private secret/);
});
test("missing server configuration returns 503 without a provider call", async () => {
  const state = setup({ env: {} }); assert.equal((await state.handler(request())).status, 503); assert.equal(state.sent.length, 0);
});
test("malformed JSON, oversized bodies, wrong content type, and foreign origins are rejected", async () => {
  const { handler } = setup();
  assert.equal((await handler(request("{"))).status, 400);
  assert.equal((await handler(request(JSON.stringify({ message: "x".repeat(25000) })))).status, 413);
  assert.equal((await handler(request(valid, { headers: { "Content-Type": "text/plain" } }))).status, 415);
  assert.equal((await handler(request(valid, { headers: { Origin: "https://attacker.example" } }))).status, 403);
});

test("POST /api/contact HTTP contract returns success only after the mock provider accepts", async () => {
  const { handler, sent } = setup({ fetchImpl: async () => Response.json({ success: true, hostname: "127.0.0.1", action: "contact" }) });
  const server = createServer(async (req, res) => {
    const address = `http://127.0.0.1:${server.address().port}`;
    const chunks = []; for await (const chunk of req) chunks.push(chunk);
    const response = await handler(new Request(address + req.url, { method: req.method, headers: req.headers, body: Buffer.concat(chunks) }));
    res.writeHead(response.status, Object.fromEntries(response.headers)); res.end(await response.text());
  });
  server.listen(0, "127.0.0.1"); await once(server, "listening");
  try {
    const res = await fetch(`http://127.0.0.1:${server.address().port}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(valid) });
    assert.equal(res.status, 200); assert.equal((await res.json()).status, "success"); assert.equal(sent.length, 1);
  } finally { await new Promise(resolve => server.close(resolve)); }
});
