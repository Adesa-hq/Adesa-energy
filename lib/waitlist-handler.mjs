import { conversionSchema } from "./conversion-schema.mjs";
import { readSubmission, submissionResponse as reply, syncWaitlist } from "./submission-http.mjs";
export function createWaitlistHandler({ env = process.env, fetchImpl = fetch, logger = console } = {}) {
  return async function POST(request) {
    const input = await readSubmission(request);
    if (input.error) return input.error;
    const parsed = conversionSchema.safeParse(input.body);
    if (!parsed.success) return reply(400, "Please check your waitlist details.", { errors: parsed.error.flatten().fieldErrors });
    if (!env.WAITLIST_SCRIPT_URL) return reply(503, "The waitlist is temporarily unavailable. Please email adeinfo@adesahq.com.");
    try {
      await syncWaitlist(fetchImpl, env.WAITLIST_SCRIPT_URL, parsed.data);
      return reply(200, "Your waitlist request has been received.");
    } catch {
      logger.error("waitlist_provider_not_confirmed");
      return reply(502, "We could not confirm your waitlist request. Please try again or email adeinfo@adesahq.com.");
    }
  };
}
