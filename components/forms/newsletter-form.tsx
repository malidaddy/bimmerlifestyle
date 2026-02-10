"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { HoneypotFields } from "@/components/forms/honeypot-fields";
import { HONEYPOT_FIELD, HONEYPOT_TIME_FIELD } from "@/lib/honeypot";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    const hp = formRef.current ? Object.fromEntries(
      [HONEYPOT_FIELD, HONEYPOT_TIME_FIELD].map(k => [k, new FormData(formRef.current!).get(k) ?? ""])
    ) : {};

    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, ...hp }),
      });
      if (!response.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-green-400">Thanks for subscribing!</p>;
  }

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
        <HoneypotFields />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-11 w-full bg-zinc-800 border-zinc-700 text-zinc-200 placeholder:text-zinc-500 focus-visible:ring-primary sm:min-w-0 sm:flex-1"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50 sm:w-auto"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
