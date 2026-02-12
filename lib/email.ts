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
      html: buildNotificationEmail(data, label),
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
      html: buildAutoResponseEmail(toName, autoResponder.message),
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

// ---------------------------------------------------------------------------
// Styled email templates
// ---------------------------------------------------------------------------

const BRAND_NAVY = "#16588E";
const BRAND_RED = "#E7222E";

function emailShell(bodyContent: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <!-- Header stripe -->
        <tr><td style="height:4px;background:linear-gradient(90deg,${BRAND_NAVY} 0%,#81C4FF 50%,${BRAND_RED} 100%);"></td></tr>
        <!-- Logo area -->
        <tr><td style="padding:28px 32px 0;text-align:center;">
          <h1 style="margin:0;font-size:22px;font-weight:700;color:#18181b;letter-spacing:-0.5px;">Bimmer Lifestyle Autocare</h1>
          <p style="margin:4px 0 0;font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:1.5px;">BMW &amp; MINI Specialist</p>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:24px 32px 32px;">
          ${bodyContent}
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:20px 32px;background-color:#fafafa;border-top:1px solid #e4e4e7;">
          <p style="margin:0;font-size:12px;color:#a1a1aa;text-align:center;line-height:1.6;">
            Bimmer Lifestyle Autocare &middot; 9 Church Hill Ave, Montego Bay, Jamaica<br/>
            <a href="tel:+18768591704" style="color:${BRAND_NAVY};text-decoration:none;">876-859-1704</a> &middot;
            <a href="https://bimmerlifestyle.com" style="color:${BRAND_NAVY};text-decoration:none;">bimmerlifestyle.com</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/** Styled email sent to the business when a form is submitted */
function buildNotificationEmail(data: FormEmailData, label: string): string {
  const rows = [
    { label: "Name", value: escapeHtml(data.name) },
    { label: "Email", value: `<a href="mailto:${escapeHtml(data.email)}" style="color:${BRAND_NAVY};text-decoration:none;">${escapeHtml(data.email)}</a>` },
    ...(data.phone ? [{ label: "Phone", value: `<a href="tel:${escapeHtml(data.phone)}" style="color:${BRAND_NAVY};text-decoration:none;">${escapeHtml(data.phone)}</a>` }] : []),
    { label: "Subject", value: escapeHtml(data.subject) },
  ];

  const tableRows = rows
    .map(
      (r) =>
        `<tr>
          <td style="padding:10px 12px;font-size:13px;color:#71717a;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f4f4f5;">${r.label}</td>
          <td style="padding:10px 12px;font-size:14px;color:#18181b;border-bottom:1px solid #f4f4f5;">${r.value}</td>
        </tr>`
    )
    .join("");

  return emailShell(`
    <p style="margin:0 0 20px;font-size:15px;color:#18181b;font-weight:600;">New ${escapeHtml(label)} Submission</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fafafa;border-radius:6px;border:1px solid #e4e4e7;">
      ${tableRows}
    </table>
    <div style="margin-top:20px;padding:16px;background-color:#fafafa;border-radius:6px;border:1px solid #e4e4e7;">
      <p style="margin:0 0 8px;font-size:13px;color:#71717a;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
      <p style="margin:0;font-size:14px;color:#18181b;line-height:1.7;">${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
    </div>
    <p style="margin:20px 0 0;font-size:12px;color:#a1a1aa;">Reply directly to this email to respond to <strong>${escapeHtml(data.name)}</strong>.</p>
  `);
}

/** Styled auto-response email sent to the customer */
function buildAutoResponseEmail(name: string, message: string): string {
  return emailShell(`
    <p style="margin:0 0 16px;font-size:16px;color:#18181b;">Hi ${escapeHtml(name)},</p>
    <p style="margin:0 0 16px;font-size:15px;color:#3f3f46;line-height:1.7;">${escapeHtml(message)}</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;">
      <tr>
        <td style="background-color:${BRAND_RED};border-radius:6px;">
          <a href="tel:+18768591704" style="display:inline-block;padding:12px 28px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;">Call Us: 876-859-1704</a>
        </td>
        <td style="width:12px;"></td>
        <td style="background-color:${BRAND_NAVY};border-radius:6px;">
          <a href="https://wa.me/18768591704" style="display:inline-block;padding:12px 28px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;">WhatsApp Us</a>
        </td>
      </tr>
    </table>
    <p style="margin:0;font-size:15px;color:#3f3f46;line-height:1.7;">
      Best regards,<br/>
      <strong style="color:#18181b;">The ${escapeHtml(siteConfig.name)} Team</strong>
    </p>
  `);
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
