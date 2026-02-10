import { Resend } from "resend";
import { siteConfig } from "@/config/site";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "");
}

/**
 * Get recipients for a specific form type.
 * Looks for `{FORM_TYPE}_EMAIL_TO` env var first, falls back to `CONTACT_EMAIL_TO`.
 * Supports comma-separated addresses: "a@x.com, b@x.com"
 *
 * Example env vars:
 *   CONTACT_EMAIL_TO=info@site.com
 *   CATERING_EMAIL_TO=catering@site.com,chef@site.com
 *   RESERVATIONS_EMAIL_TO=bookings@site.com
 */
function getRecipients(formType: string = "CONTACT"): string[] {
  const to =
    process.env[`${formType}_EMAIL_TO`] ||
    process.env.CONTACT_EMAIL_TO ||
    "";
  return to
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

export interface FormEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

/**
 * Send a form submission email to configured recipients.
 * @param data - form field values
 * @param formType - env var prefix, e.g. "CONTACT", "CATERING", "RESERVATIONS"
 * @param label - display label for the email header, e.g. "Contact Form", "Catering Inquiry"
 */
export async function sendFormEmail(
  data: FormEmailData,
  formType: string = "CONTACT",
  label: string = "Contact Form"
) {
  const recipients = getRecipients(formType);
  if (recipients.length === 0) {
    return { error: { message: "No recipients configured" } };
  }

  return getResend().emails.send({
    from: process.env.CONTACT_EMAIL_FROM!,
    to: recipients,
    replyTo: data.email,
    subject: `[${label}] ${data.subject}`,
    html: `
      <h2>New ${escapeHtml(label)} Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
      <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
    `,
  });
}

/** Backwards-compatible alias - sends via the CONTACT form type */
export async function sendContactEmail(data: FormEmailData) {
  return sendFormEmail(data, "CONTACT", "Contact Form");
}

export async function sendAutoResponse(toEmail: string, toName: string) {
  const { autoResponder } = siteConfig.contactForm;
  if (!autoResponder.enabled) return { data: null, error: null };

  return getResend().emails.send({
    from: process.env.CONTACT_EMAIL_FROM!,
    to: toEmail,
    subject: autoResponder.subject,
    html: `
      <p>Hi ${escapeHtml(toName)},</p>
      <p>${escapeHtml(autoResponder.message)}</p>
      <br />
      <p>Best regards,<br />${escapeHtml(siteConfig.name)}</p>
    `,
  });
}

export async function addNewsletterSubscriber(email: string) {
  return getResend().emails.send({
    from: process.env.CONTACT_EMAIL_FROM!,
    to: email,
    subject: "Welcome to our newsletter!",
    html: `<p>Thank you for subscribing to our newsletter. We'll keep you updated with the latest news and insights.</p>`,
  });
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
