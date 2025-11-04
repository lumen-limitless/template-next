import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.debug(req);
  return NextResponse.json({ status: "ok" }, { status: 200 });
}
