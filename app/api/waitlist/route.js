import { createWaitlistHandler } from "@/lib/waitlist-handler.mjs";
export const runtime = "nodejs";
export const maxDuration = 15;
export const POST = createWaitlistHandler();
