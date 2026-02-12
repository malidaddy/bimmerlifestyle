import { NextResponse } from "next/server";
import { z } from "zod";
import { newsletterSchema } from "@/lib/validations/newsletter";
import { addNewsletterSubscriber } from "@/lib/email";
import { isBot, stripHoneypot } from "@/lib/honeypot";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

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
