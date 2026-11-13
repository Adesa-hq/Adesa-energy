import { Resend } from "resend";
import { z } from "zod";
import { readSubmission, submissionResponse as reply } from "./submission-http.mjs";

const newsletterSchema = z.object({
  email: z.string().trim().max(254).email(),
  firstName: z.string().trim().max(80).optional().default(""),
  lastName: z.string().trim().max(80).optional().default(""),
});
const failMessage = "We could not confirm your subscription. Please try again later.";
const accepted = result => !result?.error && typeof result?.data?.id === "string" && Boolean(result.data.id);

export function createNewsletterHandler({ env = process.env, client, logger = console } = {}) {
  return async function POST(request) {
    const input = await readSubmission(request);
    if (input.error) return input.error;
    const parsed = newsletterSchema.safeParse(input.body);
    if (!parsed.success) return reply(400, "Please enter a valid email address and name.");
    if (!env.RESEND_NEWSLETTER_API_KEY || !env.RESEND_AUDIENCE_ID) return reply(503, "Newsletter signups are temporarily unavailable.");
    const { email, firstName, lastName } = parsed.data;
    try {
      const contacts = (client || new Resend(env.RESEND_NEWSLETTER_API_KEY)).contacts;
      const existing = await contacts.get({ email });
      const missing = existing?.error?.statusCode === 404 || existing?.error?.name === "not_found";
      if (existing?.error && !missing) throw new Error("contact_lookup_failed");
      if (!missing && !accepted(existing)) throw new Error("contact_lookup_unconfirmed");
      if (existing?.data?.unsubscribed === true) return reply(409, "This email previously unsubscribed. Please use the official newsletter subscription link to subscribe again.");
      if (missing) {
        const created = await contacts.create({ email, firstName, lastName, unsubscribed: false });
        if (!accepted(created)) throw new Error("contact_create_unconfirmed");
      }
      const result = await contacts.segments.add({ email, segmentId: env.RESEND_AUDIENCE_ID });
      if (accepted(result) && result.data.id === env.RESEND_AUDIENCE_ID) return reply(200, "Subscribed successfully.");
      // Never infer membership from error text (including "already"). Read it back.
      if (result?.error) {
        const membership = await contacts.segments.list({ email });
        if (!membership?.error && Array.isArray(membership?.data?.data) && membership.data.data.some(segment => segment.id === env.RESEND_AUDIENCE_ID)) return reply(200, "You are already subscribed.");
      }
      throw new Error("segment_membership_unconfirmed");
    } catch {
      logger.error("newsletter_provider_not_confirmed");
      return reply(502, failMessage);
    }
  };
}
