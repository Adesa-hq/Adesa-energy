# Submission acknowledgement audit

All four public submission endpoints were checked for false success responses.

| Endpoint | Confirmation required before success |
| --- | --- |
| `/api/contact` | Resend accepts the email and returns a message ID; verified Turnstile challenge also required |
| `/api/convert` | Resend accepts the booking email and returns a message ID |
| `/api/waitlist` | Google Apps Script returns an HTTP success and JSON with `success: true`, no error, and no error status |
| `/api/newsletter` | Resend confirms the requested segment ID, or a read-back confirms membership after an add error |

Conversion notifications go to **adeinfo@adesahq.com** using existing `RESEND_CONTACT_API_KEY` and `RESEND_FROM`. Visitor email is Reply-To when supplied. Missing/invalid mail configuration returns 503. Provider rejection, a missing acceptance ID, or network failure returns 502. These failures preserve the form details. Provider acceptance does not prove inbox delivery.

`WAITLIST_SCRIPT_URL` remains optional for conversion backup and required for the standalone waitlist. Conversion sends its primary email first. An optional Sheet failure is logged as `conversion_backup_not_confirmed`, but does not turn an accepted email into a failure that encourages duplicate bookings. The backup is not attempted when the primary email fails.

## Google Apps Script confirmation contract

The configured HTTPS Apps Script must parse `e.postData.contents`, persist the row successfully, then return JSON like:

```javascript
return ContentService.createTextOutput(JSON.stringify({ success: true }))
  .setMimeType(ContentService.MimeType.JSON);
```

On failure, it must return `{ "success": false }` (optionally with an `error` property). HTTP 200 with HTML, an empty object, a string `"true"`, `success: false`, or `status: "error"` is not proof of persistence. The website cannot verify the script's internal storage behavior; its affirmative acknowledgement is the boundary. Script errors and internal URLs are not returned to visitors. The existing external Apps Script itself has not been modified or invoked with real bookings during tests.

## Newsletter

The API still uses `RESEND_NEWSLETTER_API_KEY` and `RESEND_AUDIENCE_ID` (the existing variable name for the destination segment). Lookup failures are handled separately from a confirmed 404. Creation must return an accepted contact ID. An error message containing "already" never establishes subscription: membership must be read back from Resend. Previously unsubscribed contacts are not labelled subscribed or silently opted in again. The visible newsletter section currently links to the official LinkedIn newsletter; it does not call this API, but the available endpoint is hardened as well.

Conversion and waitlist now share bounded field validation. Their clients require a positive boolean acknowledgement and retain details on errors. Request size/content type and origin checks reject malformed submissions before providers are called. Error logs omit enquiry contents and credentials.

## Verification

```sh
node --test tests/contact.test.mjs tests/submissions.test.mjs
```

51 tests cover provider rejections, exceptions, missing credentials/IDs, explicit Sheet rejection despite HTTP 200, invalid inputs, incorrect segment IDs, duplicate membership verification, and existing Contact Us protections. Providers are mocked; no real email, waitlist entry, or subscription is created. Runtime route smoke checks use invalid requests only.

No new environment variables are required by these fixes. No production deployment is performed.
