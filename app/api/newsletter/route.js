import { createNewsletterHandler } from "@/lib/newsletter-handler.mjs";
export const runtime = "nodejs";
export const maxDuration = 30;
export const POST = createNewsletterHandler();
