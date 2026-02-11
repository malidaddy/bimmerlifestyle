import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST || "smtp-relay.brevo.com",
    port: Number(process.env.EMAIL_SERVER_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_SERVER_USER || "",
      pass: process.env.EMAIL_SERVER_PASSWORD || "",
    },
  });
}

function getFromAddress(): string {
  const name = process.env.EMAIL_FROM_NAME || "Bimmer Lifestyle";
  const address = process.env.EMAIL_FROM_ADDRESS || "no.reply@bimmerlifestyle.com";
  return `${name} <${address}>`;
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

  try {
    const info = await getTransporter().sendMail({
      from: getFromAddress(),
      to: recipients.join(", "),
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
    return { data: { id: info.messageId }, error: null };
  } catch (err) {
    return { error: { message: (err as Error).message } };
  }
}

/** Backwards-compatible alias - sends via the CONTACT form type */
export async function sendContactEmail(data: FormEmailData) {
  return sendFormEmail(data, "CONTACT", "Contact Form");
}

export async function sendAutoResponse(toEmail: string, toName: string) {
  const { autoResponder } = siteConfig.contactForm;
  if (!autoResponder.enabled) return { data: null, error: null };

  try {
    const info = await getTransporter().sendMail({
      from: getFromAddress(),
      to: toEmail,
      subject: autoResponder.subject,
      html: `
        <p>Hi ${escapeHtml(toName)},</p>
        <p>${escapeHtml(autoResponder.message)}</p>
        <br />
        <p>Best regards,<br />${escapeHtml(siteConfig.name)}</p>
      `,
    });
    return { data: { id: info.messageId }, error: null };
  } catch (err) {
    return { error: { message: (err as Error).message } };
  }
}

export async function addNewsletterSubscriber(email: string) {
  const apiKey = process.env.BREVO_API_KEY || process.env.EMAIL_SERVER_PASSWORD || "";
  const listId = Number(process.env.BREVO_LIST_ID) || 22;

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      // "duplicate_parameter" means already subscribed — treat as success
      if (body.code === "duplicate_parameter") {
        return { data: { id: email }, error: null };
      }
      return { error: { message: body.message || `Brevo API error ${res.status}` } };
    }

    return { data: { id: email }, error: null };
  } catch (err) {
    return { error: { message: (err as Error).message } };
  }
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
