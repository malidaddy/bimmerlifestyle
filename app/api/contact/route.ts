import { NextResponse } from "next/server";
import { z } from "zod";
import { contactFormSchema } from "@/lib/validations/contact";
import { sendContactEmail, sendAutoResponse } from "@/lib/email";
import { isBot, stripHoneypot } from "@/lib/honeypot";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Bot detection — return 200 silently so bots think it worked
    if (isBot(body)) {
      return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
    }

    const validatedData = contactFormSchema.parse(stripHoneypot(body));
    const result = await sendContactEmail(validatedData);

    if (result.error) {
      console.error("Email send error:", result.error.message);
      return NextResponse.json(
        { error: "Failed to send message. Please try again.", detail: result.error.message },
        { status: 500 }
      );
    }

    // Send auto-response (fire and forget - don't block the response)
    sendAutoResponse(validatedData.email, validatedData.name).catch(() => {});

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
