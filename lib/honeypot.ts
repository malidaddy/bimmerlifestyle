/**
 * Honeypot + timing-based bot protection.
 *
 * Client side: add <HoneypotFields /> inside any <form>.
 * Server side: call `checkHoneypot(body)` before processing — returns true if bot detected.
 */

/** Minimum seconds a human would take to fill out a form */
const MIN_SUBMIT_TIME_MS = 2000;

/** Field name for the hidden honeypot input (tempting name bots auto-fill) */
export const HONEYPOT_FIELD = "_website";

/** Field name for the timestamp */
export const HONEYPOT_TIME_FIELD = "_t";

/**
 * Server-side check. Returns true if the submission looks like a bot.
 * - If the honeypot field has a value → bot
 * - If the form was submitted in under 2 seconds → bot
 */
export function isBot(body: Record<string, unknown>): boolean {
  // Honeypot filled = bot
  if (body[HONEYPOT_FIELD]) return true;

  // Timing check
  const ts = Number(body[HONEYPOT_TIME_FIELD]);
  if (ts && Date.now() - ts < MIN_SUBMIT_TIME_MS) return true;

  return false;
}

/**
 * Strip honeypot fields from body before further processing / validation.
 */
export function stripHoneypot<T extends Record<string, unknown>>(body: T): T {
  const cleaned = { ...body };
  delete cleaned[HONEYPOT_FIELD];
  delete cleaned[HONEYPOT_TIME_FIELD];
  return cleaned;
}
