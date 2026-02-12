const hits = new Map<string, number[]>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

/** Returns true if the IP has exceeded the rate limit. */
export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  timestamps.push(now);
  hits.set(ip, timestamps);

  // Prune stale IPs every 100 calls to avoid unbounded growth
  if (hits.size > 500) {
    hits.forEach((ts, key) => {
      if (ts.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    });
  }

  return timestamps.length > MAX_REQUESTS;
}
