import test from "node:test";
import assert from "node:assert/strict";
import { createConversionHandler } from "../lib/conversion-handler.mjs";
import { createWaitlistHandler } from "../lib/waitlist-handler.mjs";
import { createNewsletterHandler } from "../lib/newsletter-handler.mjs";
const logger = { info() {}, error() {} };
const lead = { firstName: "Ada <b>", lastName: "Visitor", phone: "08012345678", email: "visitor@example.com", vehicleType: "Sedan", location: "Lagos", vehicleYear: "2020", numberOfVehicles: 1, referralSource: "Website", interestType: "Convert now (Self-funded)", profileType: "Individual", consent: true };
const env = { RESEND_CONTACT_API_KEY: "test-key", RESEND_FROM: "website@example.com", WAITLIST_SCRIPT_URL: "https://script.google.com/macros/s/test/exec", RESEND_NEWSLETTER_API_KEY: "newsletter-test", RESEND_AUDIENCE_ID: "segment-test" };
const request = (body = lead, raw = false) => new Request("http://localhost/api/test", { method: "POST", headers: { "Content-Type": "application/json" }, body: raw ? body : JSON.stringify(body) });
const okEmail = async () => ({ data: { id: "email-accepted" }, error: null });
function conversion(options = {}) { return createConversionHandler({ env, logger, sendEmail: okEmail, fetchImpl: async () => Response.json({ success: true }), ...options }); }

test("conversion requires accepted email and sets recipient/Reply-To safely", async () => {
  let mail; let backup;
  const handler = conversion({ sendEmail: async payload => { mail = payload; return okEmail(); }, fetchImpl: async (url, init) => { backup = JSON.parse(init.body); return Response.json({ success: true }); } });
  const response = await handler(request()); assert.equal(response.status, 200); assert.equal((await response.json()).success, true);
  assert.deepEqual(mail.to, ["adeinfo@adesahq.com"]); assert.equal(mail.replyTo, lead.email);
  assert.match(mail.html, /Ada &lt;b&gt;/); assert.doesNotMatch(mail.html, /Ada <b>/); assert.deepEqual(backup, lead);
});
for (const response of [{ error: { name: "validation_error" }, data: null }, { error: null, data: {} }, undefined]) test(`conversion does not confirm rejected/missing email acceptance ${JSON.stringify(response)}`, async () => {
  let backupCalled = false;
  const handler = conversion({ sendEmail: async () => response, fetchImpl: async () => { backupCalled = true; return Response.json({ success: true }); } });
  const result = await handler(request()); assert.equal(result.status, 502); assert.equal((await result.json()).success, false); assert.equal(backupCalled, false);
});
test("conversion transport failure does not confirm", async () => {
  const response = await conversion({ sendEmail: async () => { throw Error("private-key"); } })(request()); assert.equal(response.status, 502); assert.doesNotMatch(await response.text(), /private-key/);
});
test("conversion missing config returns 503; does not silently skip sending", async () => {
  let sent = false; const response = await conversion({ env: {}, sendEmail: async () => { sent = true; } })(request()); assert.equal(response.status, 503); assert.equal(sent, false);
});
for (const [label, fetchImpl] of [
  ["HTTP failure", async () => Response.json({ success: true }, { status: 500 })],
  ["explicit rejection", async () => Response.json({ success: false })],
  ["missing acceptance", async () => Response.json({})],
  ["non-JSON", async () => new Response("<html>login</html>")],
  ["timeout", async () => { throw Error("timeout"); }],
]) test(`accepted conversion remains successful when optional backup has ${label}`, async () => {
  assert.equal((await conversion({ fetchImpl })(request())).status, 200);
});
test("conversion accepts omitted optional visitor email without inventing a Reply-To", async () => {
  let payload; const response = await conversion({ sendEmail: async mail => { payload = mail; return okEmail(); } })(request({ ...lead, email: "" })); assert.equal(response.status, 200); assert.equal(payload.replyTo, undefined);
});
test("booking rejects malformed JSON, invalid data, fractional counts, future years, and header injection", async () => {
  const handler = conversion();
  assert.equal((await handler(request("{", true))).status, 400);
  for (const change of [{ phone: "invalid" }, { consent: false }, { firstName: " " }, { numberOfVehicles: 1.5 }, { vehicleYear: "2999" }, { firstName: "Visitor\r\nBcc: other@example.com" }]) assert.equal((await handler(request({ ...lead, ...change }))).status, 400);
});
function waitlist(fetchImpl, overrides = {}) { return createWaitlistHandler({ env, logger, fetchImpl, ...overrides }); }
test("waitlist accepts only explicit script confirmation", async () => {
  assert.equal((await waitlist(async () => Response.json({ success: true }))(request())).status, 200);
});
for (const result of [{ success: false }, {}, { success: "true" }, { status: "success" }, { success: true, error: "not saved" }, { success: true, status: "error" }]) test(`waitlist rejects misleading HTTP 200: ${JSON.stringify(result)}`, async () => {
  const response = await waitlist(async () => Response.json(result))(request()); assert.equal(response.status, 502); assert.equal((await response.json()).success, false);
});
test("waitlist handles HTTP errors, login HTML, network failures, missing config, and invalid fields", async () => {
  for (const fetchImpl of [async () => Response.json({ success: true }, { status: 403 }), async () => new Response("login"), async () => { throw Error("private error"); }]) {
    const response = await waitlist(fetchImpl)(request()); assert.equal(response.status, 502); assert.doesNotMatch(await response.text(), /private error/);
  }
  assert.equal((await waitlist(fetch, { env: {} })(request())).status, 503);
  assert.equal((await waitlist(fetch)(request({ consent: true }))).status, 400);
});

function newsletter(overrides = {}, config = env) {
  const calls = [];
  const segments = { add: async () => ({ data: { id: env.RESEND_AUDIENCE_ID }, error: null }), list: async () => ({ data: { data: [] }, error: null }), ...overrides.segments };
  const contacts = { get: async () => ({ data: { id: "contact-id", unsubscribed: false }, error: null }), create: async () => { calls.push("create"); return { data: { id: "created-id" }, error: null }; }, ...overrides, segments };
  return { calls, handler: createNewsletterHandler({ env: config, logger, client: { contacts } }) };
}
const subscriber = { email: "reader@example.com", firstName: "Reader" };
test("newsletter confirms an accepted segment membership", async () => {
  const { handler } = newsletter(); assert.equal((await handler(request(subscriber))).status, 200);
});
test("newsletter creates a contact only on explicit not-found", async () => {
  const { handler, calls } = newsletter({ get: async () => ({ error: { name: "not_found", statusCode: 404 }, data: null }) }); assert.equal((await handler(request(subscriber))).status, 200); assert.deepEqual(calls, ["create"]);
});
test("newsletter lookup outage does not become a create or success", async () => {
  const { handler, calls } = newsletter({ get: async () => ({ error: { statusCode: 403, name: "forbidden" }, data: null }) }); assert.equal((await handler(request(subscriber))).status, 502); assert.equal(calls.length, 0);
});
test("newsletter contact create must return acceptance ID", async () => {
  const { handler } = newsletter({ get: async () => ({ error: { statusCode: 404 } }), create: async () => ({ data: {}, error: null }) }); assert.equal((await handler(request(subscriber))).status, 502);
});
test("newsletter never infers success from 'already' error text", async () => {
  const { handler } = newsletter({ segments: { add: async () => ({ error: { message: "already failed" } }) } }); assert.equal((await handler(request(subscriber))).status, 502);
});
test("newsletter confirms existing membership by reading it back", async () => {
  const { handler } = newsletter({ segments: { add: async () => ({ error: { name: "conflict" } }), list: async () => ({ data: { data: [{ id: env.RESEND_AUDIENCE_ID }] }, error: null }) } }); const response = await handler(request(subscriber)); assert.equal(response.status, 200); assert.equal((await response.json()).message, "You are already subscribed.");
});
for (const addResult of [{ data: {}, error: null }, { data: { id: "other-segment" }, error: null }]) test("newsletter rejects missing/wrong segment confirmation", async () => {
  const { handler } = newsletter({ segments: { add: async () => addResult } }); assert.equal((await handler(request(subscriber))).status, 502);
});
test("newsletter read-back errors do not confirm subscription", async () => {
  const { handler } = newsletter({ segments: { add: async () => ({ error: { name: "conflict" } }), list: async () => ({ error: { name: "forbidden" }, data: { data: [{ id: env.RESEND_AUDIENCE_ID }] } }) } }); assert.equal((await handler(request(subscriber))).status, 502);
});
test("unsubscribed contact is not falsely reported as subscribed", async () => {
  const { handler } = newsletter({ get: async () => ({ data: { id: "contact-id", unsubscribed: true }, error: null }) }); assert.equal((await handler(request(subscriber))).status, 409);
});
test("newsletter validates JSON and email and fails closed on missing config/network errors", async () => {
  const { handler } = newsletter(); assert.equal((await handler(request("{", true))).status, 400); assert.equal((await handler(request({ email: "invalid" }))).status, 400);
  assert.equal((await newsletter({}, {}).handler(request(subscriber))).status, 503);
  assert.equal((await newsletter({ get: async () => { throw Error("secret"); } }).handler(request(subscriber))).status, 502);
});
