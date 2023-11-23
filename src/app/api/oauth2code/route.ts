import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return new Response("코드");
}
