import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req.url);

  return new Response("코드");
}
