import { connection } from "next/server";

export async function GET(): Promise<Response> {
  // Opt out of prerendering so the check reflects the running server.
  await connection();
  return Response.json({ status: "ok" });
}
