# Contact Us email notifications

The existing Next.js form posts JSON to `POST /api/contact` (Node.js Vercel Function). It uses the project's existing Resend SDK. Every accepted enquiry is addressed to **adeinfo@adesahq.com**; the visitor is the Reply-To, never the From address. The HTML and plain-text alternatives include name, email, optional phone, subject, message, and a server-generated submission timestamp in Africa/Lagos.

## Required environment variables

Add these in the Vercel project's Settings → Environment Variables for each intended environment. For local development put them in gitignored `.env.local` and restart `npm run dev`.

| Variable | Purpose | Secret? |
| --- | --- | --- |
| `RESEND_CONTACT_API_KEY` | API key for the organization's authorized Resend sending account, with permission for the verified sender domain | Yes, server only |
| `RESEND_FROM` | Plain sender email address on that verified domain, e.g. `website@your-verified-domain.example`; do not include a display name or angle brackets | No, server only |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile widget secret | Yes, server only |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Matching public widget site key; available at build time | No, intentionally public |

Configure a managed Turnstile widget restricted to `adesaenergy.com` and `www.adesaenergy.com`. Add explicitly approved Preview hostnames when testing previews. The server verifies the token's success, `contact` action, and exact request hostname. Production widgets should not allow localhost. Use a separate development widget for localhost/127.0.0.1. Missing configuration fails closed with HTTP 503; the form shows a direct email alternative when its public key is absent.

Resend requires a verified sending domain with its prescribed DNS records. Keep the organization's Zoho MX records: Resend sends notifications while Zoho continues to receive email. This implementation does **not** use Zoho SMTP, require the shared mailbox's password, change Zoho regional settings, or assume the mailbox has its own login. Use an authorized Resend account and sender identity. A future SMTP migration would need an authorized Zoho sending account, regional SMTP host and appropriate app password/OAuth credentials and send-as permissions; those are not required here.

## Behavior and protection

- The client and server share trimmed field validation: name ≤120, email ≤254, subject ≤160, phone ≤40, message 5–5,000 characters, and affirmative consent. Phone is optional.
- JSON only; streaming request size cap 24 KiB, cross-origin browser submissions rejected, honeypot field rejected, and server-verified single-use Turnstile tokens protect against automated submissions. No process-local rate limiter is treated as a distributed control. Higher-volume abuse can additionally be controlled using Vercel Firewall rate limits.
- HTML is escaped; header fields reject control characters. The destination cannot be supplied by the visitor.
- HTTP 200 is returned only when Resend returns a non-empty accepted message ID and no error. Provider rejection/network failure returns 502; challenge/configuration outages return 503; validation failures return 400. Submitted text remains in the form after failure, and a fresh challenge is required after every attempt.
- Success means **provider acceptance**, not proven inbox delivery. Verify delivery in Resend logs and the shared Zoho inbox before any approved production release. Provider logs contain only event codes/message IDs, not visitor messages or credentials.
- The route runs on Node.js with a 30-second Vercel function budget. Challenge verification has an 8-second timeout; client requests time out after 35 seconds. A timed-out request can have an uncertain delivery outcome: check provider logs before resubmitting to avoid duplicates.

## Local verification

Run `node --test tests/contact.test.mjs`. Tests exercise validation, escaping, routing, provider acceptance/rejection, missing config, challenge failures, and the handler over HTTP with mocked external services. They send **no real email**. The Next.js `/api/contact` route delegates directly to that handler; `GET` is unsupported.

For a manual local check, start `npm run dev` with the required variables and visit `/contact`. Submit an enquiry, verify the success state, then confirm Resend's accepted message and receipt at the shared mailbox. Repeat with a provider rejection to ensure the form preserves the enquiry and shows an error. Real delivery requires authorized provider credentials; it cannot be verified using mock tests.

No production deployment or Vercel environment changes are made by this implementation. Deployment requires the owner's separate approval.

References: [Resend Next.js integration](https://resend.com/docs/send-with-nextjs), [Cloudflare server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).
