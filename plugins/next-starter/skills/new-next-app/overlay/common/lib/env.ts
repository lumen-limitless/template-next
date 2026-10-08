/** biome-ignore-all lint/suspicious/noConsole: report invalid env at startup */
import { z } from "zod";

// Server-only variables (DATABASE_URL, API keys, ...). Only parsed on the server.
const server = z.object({
  VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
  VERCEL_URL: z.string().optional(),
});

// Browser-exposed variables. Names must start with NEXT_PUBLIC_.
const client = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().optional(),
  NEXT_PUBLIC_APP_URL: z.string().optional(),
});

// Next.js only inlines NEXT_PUBLIC_ variables that are read by their full name,
// so every client variable has to be listed here as well.
const clientRuntimeEnv: Record<keyof z.infer<typeof client>, unknown> = {
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
};

const invalidClientKeys = Object.keys(client.shape).filter(
  (key) => !key.startsWith("NEXT_PUBLIC_")
);

if (invalidClientKeys.length > 0) {
  throw new Error(
    `Client env vars must start with NEXT_PUBLIC_: ${invalidClientKeys.join(", ")}`
  );
}

function parseEnv<T extends z.ZodType>(
  schema: T,
  values: unknown,
  label: string
): z.infer<T> {
  const result = schema.safeParse(values);

  if (!result.success) {
    console.error(
      `❌ Invalid ${label} environment variables:`,
      z.flattenError(result.error).fieldErrors
    );
    throw new Error(`Invalid ${label} environment variables`);
  }

  return result.data;
}

const isServer = typeof window === "undefined";

const serverEnv = isServer
  ? parseEnv(server, process.env, "server")
  : ({} as z.infer<typeof server>);

const clientEnv = parseEnv(client, clientRuntimeEnv, "client");

export const env = {
  ...serverEnv,
  ...clientEnv,
};
