import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const body = await req.json();

    const scriptUrl = process.env.WAITLIST_SCRIPT_URL;

    if (!scriptUrl) {
      throw new Error("WAITLIST_SCRIPT_URL not set");
    }

    // Send data to Google Script
    const gsResponse = await fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (!gsResponse.ok) {
      const text = await gsResponse.text();
      return NextResponse.json(
        { success: false, error: `Google Script error: ${text}` },
        { status: 500 }
      );
    }

    const data = await gsResponse.json();

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}