import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

const CANONICAL_URL = new URL(siteConfig.url);
const ADESA_HOSTS = new Set(["adesaenergy.com", "www.adesaenergy.com"]);

function getRequestHost(request) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const rawHost =
    forwardedHost?.split(",")[0]?.trim() || request.headers.get("host") || "";

  return rawHost.toLowerCase().split(":")[0];
}

function isInsecureRequest(request) {
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();

  return forwardedProtocol
    ? forwardedProtocol !== "https"
    : request.nextUrl.protocol !== "https:";
}

export function proxy(request) {
  const requestHost = getRequestHost(request);
  const needsCanonicalOrigin =
    ADESA_HOSTS.has(requestHost) &&
    (requestHost !== CANONICAL_URL.hostname || isInsecureRequest(request));

  if (!needsCanonicalOrigin) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    CANONICAL_URL,
  );

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image).*)",
};
