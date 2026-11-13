import { Resend } from "resend";
import { z } from "zod";
import { conversionSchema } from "./conversion-schema.mjs";
import { convertEmailTemplate } from "./conversion-email.mjs";
import { readSubmission, submissionResponse as reply, syncWaitlist } from "./submission-http.mjs";

const failMessage = "We could not confirm your booking. Please try again or email adeinfo@adesahq.com directly.";
export function createConversionHandler({ env = process.env, sendEmail, fetchImpl = fetch, logger = console } = {}) {
  return async function POST(request) {
    const input = await readSubmission(request);
    if (input.error) return input.error;
    const parsed = conversionSchema.safeParse(input.body);
    if (!parsed.success) return reply(400, "Please check your booking details.", { errors: parsed.error.flatten().fieldErrors });
    if (!env.RESEND_CONTACT_API_KEY || !z.string().email().safeParse(env.RESEND_FROM).success) {
      logger.error("conversion_configuration_missing");
      return reply(503, failMessage);
    }
    const lead = parsed.data;
    try {
      const payload = {
        from: `Adesa Energy Conversion <${env.RESEND_FROM}>`,
        to: ["adeinfo@adesahq.com"],
        ...(lead.email ? { replyTo: lead.email } : {}),
        subject: `New CNG Conversion Booking: ${lead.firstName} ${lead.lastName} (${lead.vehicleType})`,
        html: convertEmailTemplate(lead),
        text: Object.entries(lead).filter(([key]) => key !== "consent").map(([key, value]) => `${key}: ${value}`).join("\n"),
      };
      const result = await (sendEmail ? sendEmail(payload) : new Resend(env.RESEND_CONTACT_API_KEY).emails.send(payload));
      if (result?.error || typeof result?.data?.id !== "string" || !result.data.id) {
        logger.error("conversion_provider_rejected", { code: result?.error?.name || "missing_message_id" });
        return reply(502, failMessage);
      }
      logger.info("conversion_provider_accepted", { id: result.data.id });
    } catch {
      logger.error("conversion_provider_unavailable");
      return reply(502, failMessage);
    }
    if (env.WAITLIST_SCRIPT_URL) {
      try { await syncWaitlist(fetchImpl, env.WAITLIST_SCRIPT_URL, lead); }
      catch { logger.error("conversion_backup_not_confirmed"); }
    }
    return reply(200, "Your conversion booking request has been sent to our team. We will contact you shortly.");
  };
}
