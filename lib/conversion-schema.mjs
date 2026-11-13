import { z } from "zod";
const text = (label, max = 160) => z.string().trim().min(1, `${label} is required`).max(max).regex(/^[^\x00-\x1f\x7f]+$/, "Invalid control characters");
export const conversionSchema = z.object({
  firstName: text("First name", 80),
  lastName: text("Last name", 80),
  phone: z.string().trim().regex(/^(?:0|\+234)[789][01]\d{8}$/, "Enter a valid Nigerian phone number"),
  email: z.string().trim().max(254).email("Enter a valid email").optional().or(z.literal("")),
  vehicleType: text("Vehicle type"),
  location: text("Location"),
  vehicleYear: z.string().regex(/^\d{4}$/, "Enter a valid vehicle year").refine(value => Number(value) >= 1990 && Number(value) <= new Date().getFullYear(), "Enter a valid vehicle year (1990 to present)"),
  referralSource: text("Referral source"),
  numberOfVehicles: z.number().int().min(1).max(100000),
  interestType: text("Interest type"),
  profileType: text("Profile type"),
  consent: z.literal(true, { error: "Consent is required to proceed" }),
});
