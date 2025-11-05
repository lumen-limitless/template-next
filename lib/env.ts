/** biome-ignore-all lint/suspicious/noConsole: ENV validation errors */
/** biome-ignore-all lint/suspicious/noExplicitAny: schema validation */
import { z } from "zod";

// Server-only variables (empty initially, ready for DATABASE_URL, API_KEY, etc.)
const server = z.object({});

// Client-exposed variables (must have NEXT_PUBLIC_ prefix)
const client = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1),
  NEXT_PUBLIC_APP_URL: z.url(),
});

function validateClientPrefix(schema: z.ZodObject<any>) {
  const keys = Object.keys(schema.shape);
  const invalidKeys = keys.filter((key) => !key.startsWith("NEXT_PUBLIC_"));

  if (invalidKeys.length > 0) {
    throw new Error(
      `Invalid client env var names: ${invalidKeys.join(", ")}. ` +
        "Client vars must start with NEXT_PUBLIC_"
    );
  }
}

if (typeof window === "undefined") {
  validateClientPrefix(client);
}

const serverEnv = server.safeParse(process.env);
const clientEnv = client.safeParse(process.env);

if (!(serverEnv.success && clientEnv.success)) {
  console.error("❌ Invalid environment variables:");

  if (!serverEnv.success) {
    console.error("Server:", serverEnv.error.flatten().fieldErrors);
  }

  if (!clientEnv.success) {
    console.error("Client:", clientEnv.error.flatten().fieldErrors);
  }

  throw new Error("Environment validation failed");
}

export const env = {
  ...serverEnv.data,
  ...clientEnv.data,
};
