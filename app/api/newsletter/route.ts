import { NextResponse } from "next/server";
import { z } from "zod";
import { newsletterSchema } from "@/lib/validations/newsletter";
import { addNewsletterSubscriber } from "@/lib/email";
import { isBot, stripHoneypot } from "@/lib/honeypot";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Bot detection — return 200 silently so bots think it worked
    if (isBot(body)) {
      return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });
    }

    const { email } = newsletterSchema.parse(stripHoneypot(body));
    const result = await addNewsletterSubscriber(email);

    if (result.error) {
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
