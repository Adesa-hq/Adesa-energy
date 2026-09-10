import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { convertEmailTemplate } from "@/components/Email/convertEmailTemplate";

const resend = new Resend(process.env.RESEND_CONTACT_API_KEY);

const nigeriaPhoneRegex = /^(?:0|\+234)[789][01]\d{8}$/;

const convertSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().regex(nigeriaPhoneRegex, "Enter a valid Nigerian phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  vehicleType: z.string().min(1, "Vehicle type is required"),
  location: z.string().min(1, "Location is required"),
  vehicleYear: z
    .string()
    .refine(
      (val) => Number(val) >= 1990 && Number(val) <= new Date().getFullYear(),
      {
        message: "Enter a valid vehicle year (1990 to present)",
      },
    ),
  referralSource: z.string().min(1, "Referral source is required"),
  numberOfVehicles: z.number().min(1, "Number of vehicles is required"),
  interestType: z.string().min(1, "Interest type is required"),
  profileType: z.string().min(1, "Profile type is required"),
  consent: z.boolean().refine((val) => val === true, "Consent is required"),
});

export async function POST(req) {
  try {
    const body = await req.json();
    const parsed = convertSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.format();
      const fieldErrors = Object.values(errors)
        .map((e) => (Array.isArray(e) ? e.join(", ") : ""))
        .filter(Boolean)
        .join(", ");

      return NextResponse.json(
        {
          success: false,
          error: fieldErrors || "Invalid form data provided",
        },
        { status: 400 },
      );
    }

    const leadData = parsed.data;

    // 1. Send Email Notification via Resend
    try {
      if (process.env.RESEND_CONTACT_API_KEY && process.env.RESEND_FROM) {
        await resend.emails.send({
          from: `Adesa Energy Conversion <${process.env.RESEND_FROM}>`,
          to: ["adeinfo@adesahq.com"],
          replyTo: leadData.email || "adeinfo@adesahq.com",
          subject: `🚗 New CNG Conversion Booking: ${leadData.firstName} ${leadData.lastName} (${leadData.vehicleType})`,
          html: convertEmailTemplate(leadData),
        });
      }
    } catch (emailErr) {
      console.error("Resend email delivery notice:", emailErr.message);
      // We do not fail the submission if Google Apps script or internal sync succeeds
    }

    // 2. Backup sync to Google Apps Script / Sheet if configured
    const scriptUrl = process.env.WAITLIST_SCRIPT_URL;
    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        });
      } catch (gsErr) {
        console.error("Google Script sync notice:", gsErr.message);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Conversion booking request received successfully! Our team will contact you shortly.",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process conversion request" },
      { status: 500 },
    );
  }
}
