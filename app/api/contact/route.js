import { contactEmailTemplate } from "@/components/Email/contactEmailTemplate";
import { Resend } from "resend";
import { z } from "zod";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_CONTACT_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().or(z.literal("")),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(req) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.format();
      const fieldErrors = Object.values(errors)
        .map((e) => (Array.isArray(e) ? e.join(", ") : ""))
        .filter(Boolean)
        .join(", ");

      return NextResponse.json(
        {
          status: "error",
          message: fieldErrors || "Invalid input data",
        },
        { status: 400 },
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    await resend.emails.send({
      from: `Adesa Energy Contact <${process.env.RESEND_FROM || "adeinfo@adesahq.com"}>`,
      to: ["adeinfo@adesahq.com"],
      replyTo: email,
      subject: `New Contact Submission: ${subject} (${name})`,
      html: contactEmailTemplate({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Your message has been sent successfully. We will get back to you soon.",
      },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to send message. Please try again later or contact us directly.",
      },
      { status: 500 },
    );
  }
}
