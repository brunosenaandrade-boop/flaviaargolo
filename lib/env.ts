/**
 * Environment variable validation
 * Ensures all required env vars are present and properly configured
 */

const requiredEnvVars = [
  'GEMINI_API_KEY',
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
] as const;

const optionalEnvVars = [
  'NEXT_PUBLIC_GA_ID',
  'NEXT_PUBLIC_SITE_URL',
] as const;

/**
 * Validates that all required environment variables are set
 * Throws an error if any are missing
 */
export function validateEnv(): void {
  const missingVars: string[] = [];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missingVars.push(envVar);
    }
  }

  if (missingVars.length > 0) {
    const message = `Missing required environment variables:\n${missingVars.map((v) => `  - ${v}`).join('\n')}\n\nPlease check your .env.local file.`;
    throw new Error(message);
  }
}

/**
 * Gets a required environment variable
 * Throws if not set (after validation)
 */
export function getEnv(key: typeof requiredEnvVars[number]): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

/**
 * Gets an optional environment variable
 * Returns undefined if not set
 */
export function getOptionalEnv(key: typeof optionalEnvVars[number]): string | undefined {
  return process.env[key];
}

/**
 * Validated environment object
 * Safe to use after validateEnv() is called
 */
export const env = {
  // Required
  geminiApiKey: () => getEnv('GEMINI_API_KEY'),
  supabaseUrl: () => getEnv('NEXT_PUBLIC_SUPABASE_URL'),
  supabaseAnonKey: () => getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY'),

  // Optional
  gaId: () => getOptionalEnv('NEXT_PUBLIC_GA_ID'),
  siteUrl: () => getOptionalEnv('NEXT_PUBLIC_SITE_URL'),

  // Computed
  isProduction: () => process.env.NODE_ENV === 'production',
  isDevelopment: () => process.env.NODE_ENV === 'development',
} as const;
