import { createContactHandler } from "@/lib/contact-handler.mjs";

export const runtime = "nodejs";
export const maxDuration = 30;
export const POST = createContactHandler();
