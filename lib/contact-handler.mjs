import { Resend } from "resend";
import { z } from "zod";
import { contactSchema } from "./contact-schema.mjs";
import { contactEmailTemplate } from "./contact-email.mjs";

const RECIPIENT = "adeinfo@adesahq.com";
const MAX_BODY_BYTES = 24 * 1024;
const failureMessage = "Your message could not be sent. Please try again or email adeinfo@adesahq.com directly.";
const reply = (status, message, extra = {}) => Response.json({ status: status === 200 ? "success" : "error", message, ...extra }, { status, headers: { "Cache-Control": "no-store" } });

async function readBody(request) {
  const reader = request.body?.getReader();
  if (!reader) return "";
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return new TextDecoder().decode(bytes);
}

// Dependency injection lets tests exercise the actual handler without sending mail.
export function createContactHandler({ env = process.env, fetchImpl = fetch, sendEmail, now = () => new Date(), logger = console } = {}) {
  return async function POST(request) {
    const requestUrl = new URL(request.url);
    const origin = request.headers.get("origin");
    if ((origin && origin !== requestUrl.origin) || request.headers.get("sec-fetch-site") === "cross-site") {
      return reply(403, "Please submit this form from the Adesa Energy website.");
    }
    if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") return reply(415, "Send the enquiry as JSON.");
    let body;
    try {
      const raw = await readBody(request);
      if (raw === null) return reply(413, "Your enquiry is too large.");
      body = JSON.parse(raw);
    } catch { return reply(400, "Invalid request body."); }
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) return reply(400, "Please check the form fields and try again.", { errors: parsed.error.flatten().fieldErrors });
    if (parsed.data.website) return reply(400, "Unable to accept this submission.");
    if (!z.string().email().safeParse(env.RESEND_FROM).success || !env.RESEND_CONTACT_API_KEY || !env.TURNSTILE_SECRET_KEY || !env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      logger.error("contact_configuration_missing");
      return reply(503, failureMessage);
    }
    const token = body.turnstileToken;
    if (typeof token !== "string" || !token || token.length > 2048) return reply(400, "Please complete the security check and try again.");
    try {
      const verification = await fetchImpl("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token }),
        signal: AbortSignal.timeout(8000),
      });
      if (!verification.ok) throw new Error("verification_unavailable");
      const challenge = await verification.json();
      if (challenge.success !== true || challenge.action !== "contact" || challenge.hostname !== requestUrl.hostname) {
        return reply(400, "The security check expired or failed. Please try again.");
      }
    } catch {
      logger.error("contact_verification_unavailable");
      return reply(503, "The security check is temporarily unavailable. Please try again.");
    }
    const { name, email, phone, subject, message } = parsed.data;
    const submittedAt = new Intl.DateTimeFormat("en-GB", { dateStyle: "full", timeStyle: "long", timeZone: "Africa/Lagos" }).format(now());
    const payload = {
      from: `Adesa Energy Contact <${env.RESEND_FROM}>`,
      to: [RECIPIENT],
      replyTo: email,
      subject: `New ADESA Energy enquiry: ${subject} (${name})`,
      html: contactEmailTemplate({ name, email, phone, subject, message, submittedAt }),
      text: `New ADESA Energy website enquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nSubject: ${subject}\nSubmitted: ${submittedAt} (Africa/Lagos)\n\n${message}`,
    };
    try {
      const result = await (sendEmail ? sendEmail(payload) : new Resend(env.RESEND_CONTACT_API_KEY).emails.send(payload));
      if (result?.error || !result?.data?.id) {
        logger.error("contact_provider_rejected", { code: result?.error?.name || "missing_message_id" });
        return reply(502, failureMessage);
      }
      logger.info("contact_provider_accepted", { id: result.data.id });
      return reply(200, "Your enquiry has been sent. Our team will get back to you soon.");
    } catch {
      logger.error("contact_provider_unavailable");
      return reply(502, failureMessage);
    }
  };
}
