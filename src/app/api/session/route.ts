import { withSession } from "@/util/withSession";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return withSession(req, (user) => {
    return new Response("", { status: 200 });
  });
}
