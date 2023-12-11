import { NextRequest, NextResponse } from "next/server";

export function withSession(
  req: NextRequest,
  callback: (access_token: string) => void
) {
  const access_token = req.cookies.get("access_token")?.value;
  if (!access_token)
    return new Response("Authentication Error", { status: 401 });

  return callback(access_token);
}
