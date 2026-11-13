export const submissionResponse = (status, message, extra = {}) => Response.json({
  success: status === 200,
  status: status === 200 ? "success" : "error",
  message,
  ...(status === 200 ? {} : { error: message }),
  ...extra,
}, { status, headers: { "Cache-Control": "no-store" } });

export async function readSubmission(request) {
  const origin = request.headers.get("origin");
  if ((origin && origin !== new URL(request.url).origin) || request.headers.get("sec-fetch-site") === "cross-site") return { error: submissionResponse(403, "Please submit from the Adesa Energy website.") };
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") return { error: submissionResponse(415, "Send the submission as JSON.") };
  const reader = request.body?.getReader();
  if (!reader) return { error: submissionResponse(400, "Invalid request body.") };
  let size = 0;
  const chunks = [];
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 24 * 1024) {
        await reader.cancel();
        return { error: submissionResponse(413, "Your submission is too large.") };
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
    return { body: JSON.parse(new TextDecoder().decode(bytes)) };
  } catch {
    return { error: submissionResponse(400, "Invalid request body.") };
  } finally { reader.releaseLock(); }
}

export async function syncWaitlist(fetchImpl, url, data) {
  const destination = new URL(url);
  if (destination.protocol !== "https:") throw new Error("invalid_script_configuration");
  const response = await fetchImpl(destination.href, {
    method: "POST",
    // Apps Script reads JSON from e.postData.contents; text/plain avoids unnecessary preflights.
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error("script_http_error");
  const result = await response.json();
  if (result?.success !== true || result?.error || result?.status === "error") throw new Error("script_not_accepted");
}
