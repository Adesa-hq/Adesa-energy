import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("POST /api/waitlist called");

    const body = await req.json();
    console.log("Request body:", body);

    const scriptUrl = process.env.WAITLIST_SCRIPT_URL;
    console.log("Using script URL:", scriptUrl);

    if (!scriptUrl) {
      throw new Error("WAITLIST_SCRIPT_URL not set");
    }

    // Send data to Google Script
    const gsResponse = await fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify(body),
    });

    console.log("Google Script response status:", gsResponse.status);

    if (!gsResponse.ok) {
      const text = await gsResponse.text();
      console.error("Google Script returned error:", text);
      return NextResponse.json(
        { success: false, error: `Google Script error: ${text}` },
        { status: 500 }
      );
    }

    const data = await gsResponse.json();
    console.log("Google Script returned data:", data);

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("API Route Error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}