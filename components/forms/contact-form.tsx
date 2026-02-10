"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { HoneypotFields } from "@/components/forms/honeypot-fields";
import { HONEYPOT_FIELD, HONEYPOT_TIME_FIELD } from "@/lib/honeypot";

export function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData, event?: React.BaseSyntheticEvent) {
    const form = event?.target as HTMLFormElement | undefined;
    const hp = form ? {
      [HONEYPOT_FIELD]: new FormData(form).get(HONEYPOT_FIELD) ?? "",
      [HONEYPOT_TIME_FIELD]: new FormData(form).get(HONEYPOT_TIME_FIELD) ?? "",
    } : {};

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...hp }),
      });

      if (!response.ok) throw new Error();

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      <HoneypotFields />

      <div className="grid gap-7 sm:grid-cols-2">
        <div className="space-y-2.5">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Your full name"
            className="border-2"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm font-medium text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2.5">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="border-2"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm font-medium text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div className="space-y-2.5">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (876) 000-0000"
            className="border-2"
            {...register("phone")}
          />
        </div>

        <div className="space-y-2.5">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="How can we help?"
            className="border-2"
            {...register("subject")}
          />
          {errors.subject && (
            <p className="text-sm font-medium text-destructive">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your BMW, what service you need, or any questions you have..."
          rows={7}
          className="border-2"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm font-medium text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="btn-lg w-full bg-[#E7222E] text-white shadow-lg shadow-[#E7222E]/20 hover:bg-[#c91c26] hover:shadow-[#E7222E]/30 transition-all duration-300"
      >
        {isSubmitting ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <Send className="mr-2 h-5 w-5" />
        )}
        Send Message
      </Button>
    </form>
  );
}
