import { contactEmailTemplate } from "@/components/Email/contactEmailTemplate";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_CONTACT_API_KEY);

// Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val.replace(/\D/g, "")) : null)),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(req) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.format(); // replaces flatten()
      const fieldErrors = Object.values(errors)
        .map((e) => (Array.isArray(e) ? e.join(", ") : ""))
        .filter(Boolean)
        .join(", ");

      return new Response(
        JSON.stringify({
          status: "error",
          message: fieldErrors,
        }),
        { status: 400 },
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    await resend.emails.send({
      from: `Adesa Energy Contact <${process.env.RESEND_FROM}>`,
      to: ["info@adesahq.com"],
      replyTo: email,
      subject: `Contact form submission: ${subject}`,
      html: contactEmailTemplate({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Message sent successfully",
      }),
      { status: 200 },
    );
  } catch (err) {

    return new Response(
      JSON.stringify({
        status: "error",
        message: "Failed to send message",
      }),
      { status: 500 },
    );
  }
}
