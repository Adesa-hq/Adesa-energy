import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_NEWSLETTER_API_KEY);

export async function POST(req) {
  const { email, firstName, lastName } = await req.json();

  if (!email) {
    return Response.json(
      { status: "error", message: "Email required" },
      { status: 400 },
    );
  }

  try {
    let contactExists = false;

    // 1. Check if contact already exists
    const { data: existingContact } = await resend.contacts.get({
      email,
    });

    if (existingContact) {
      contactExists = true;
    }

    // 2. Create only if not exists
    if (!contactExists) {
      const { error: createError } = await resend.contacts.create({
        email,
        firstName: firstName || "",
        lastName: lastName || "",
        unsubscribed: false,
      });

      if (createError) {
        return Response.json(
          {
            status: "error",
            message: createError.message || "Failed to create contact",
          },
          { status: 500 },
        );
      }
    }

    // 3. Add to newsletter audience
    const { error: segmentError } = await resend.contacts.segments.add({
      email,
      segmentId: process.env.RESEND_AUDIENCE_ID,
    });

    if (segmentError) {
      // Already in segment is not a real error
      if (segmentError.message?.toLowerCase().includes("already")) {
        return Response.json(
          {
            status: "success",
            message: "You are already subscribed",
          },
          { status: 200 },
        );
      }

      return Response.json(
        {
          status: "error",
          message: segmentError.message || "Audience add failed",
        },
        { status: 500 },
      );
    }

    // 4. Final response
    return Response.json(
      {
        status: "success",
        message: contactExists
          ? "Subscription updated"
          : "Subscribed successfully",
      },
      { status: 200 },
    );
  } catch (err) {

    return Response.json(
      {
        status: "error",
        message: "Server error",
      },
      { status: 500 },
    );
  }
}


//sheet

// import { NextResponse } from "next/server";
// import { z } from "zod";

// // Define schema
// const emailSchema = z.object({
//   email: z.string().trim().email("Invalid email address"),
// });

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     // Validate with Zod
//     const parsed = emailSchema.safeParse(body);
//     if (!parsed.success) {
//       return NextResponse.json(
//         { message: parsed.error.errors[0].message },
//         { status: 400 },
//       );
//     }

//     const { email } = parsed.data;

//     const res = await fetch(process.env.NEWSLETTER_SCRIPT_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email }),
//     });

//     const data = await res.json();

//     if (!res.ok || data.success === false) {
//       return NextResponse.json(
//         { message: data.error || data.message || "Subscription failed" },
//         { status: 400 },
//       );
//     }

//     return NextResponse.json(
//       { message: data.message || "Subscribed successfully" },
//       { status: 200 },
//     );
//   } catch (error) {
//     return NextResponse.json({ message: "Network error" }, { status: 500 });
//   }
// }
