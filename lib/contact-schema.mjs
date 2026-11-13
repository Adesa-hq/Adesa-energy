import { z } from "zod";

const singleLine = (max, message) => z.string().trim().min(1, message).max(max).regex(/^[^\r\n\x00-\x1f\x7f]+$/, "Use a single line without control characters");
export const contactSchema = z.object({
  name: singleLine(120, "Full name is required"),
  email: z.string().trim().max(254).email("Invalid email address"),
  phone: z.string().trim().max(40).regex(/^[+\d\s().-]*$/, "Enter a valid phone number").optional().default(""),
  subject: singleLine(160, "Please select or enter a subject"),
  message: z.string().trim().min(5, "Message must be at least 5 characters").max(5000, "Message must be 5,000 characters or fewer").refine((value) => !/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(value), "Message contains invalid characters"),
  consent: z.literal(true, { error: "Consent is required to proceed" }),
  website: z.string().max(200).optional().default(""),
});
