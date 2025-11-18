/**
 * Simple in-memory rate limiter for API routes
 * Tracks requests per IP address
 */

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

/**
 * Get client IP address from request
 */
export function getClientIp(headers: Headers): string {
  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  return 'unknown';
}

/**
 * Check if request should be rate limited
 * @param ip Client IP address
 * @param limit Maximum requests allowed in window
 * @param windowMs Time window in milliseconds
 * @returns Object with { allowed: boolean, remaining: number, resetTime: number }
 */
export function checkRateLimit(
  ip: string,
  limit: number = 10,
  windowMs: number = 60000 // 1 minute by default
): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const key = ip;

  // Initialize or reset if window has passed
  if (!store[key] || store[key].resetTime < now) {
    store[key] = {
      count: 0,
      resetTime: now + windowMs
    };
  }

  const record = store[key];
  const allowed = record.count < limit;

  if (allowed) {
    record.count++;
  }

  const remaining = Math.max(0, limit - record.count);
  const resetTime = record.resetTime;

  return {
    allowed,
    remaining,
    resetTime
  };
}

/**
 * Clean up old entries from store (call periodically)
 * Prevents memory leak from IP addresses that stop making requests
 */
export function cleanupStore(): void {
  const now = Date.now();

  for (const key in store) {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  }
}

// Run cleanup every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupStore, 5 * 60 * 1000);
}
