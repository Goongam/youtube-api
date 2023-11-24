import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const CODE = req.nextUrl.searchParams.get("code");

  // refresh토큰 받기: https://developers.google.com/identity/protocols/oauth2/web-server?hl=ko#exchange-authorization-code
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `code=${CODE}&client_id=984820113102-dsnit5cepaodq5s5h45l407n9famgj8n.apps.googleusercontent.com&client_secret=${process.env.SECRET}&redirect_uri=http://localhost:3000/api/oauth2callback&grant_type=authorization_code`,
  });
  const responseToken = await tokenResponse.json();
  const access_token = responseToken.access_token;
  const response = NextResponse.redirect(process.env.URL as string);
  response.cookies.set({
    name: "access_token",
    value: access_token,
    httpOnly: true,
    // expires: 3600, TODO: 만료일 현재시간 + 1시간
  });
  return response;
}
