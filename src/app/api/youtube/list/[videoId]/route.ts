import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export interface CaptionData {
  kind: string;
  etag: string;
  id: string;
}
interface CaptionListData {
  kind: string;
  etag: string;
  items: Array<CaptionData>;
}

// https://youtube.googleapis.com/youtube/v3/captions?part=snippet&videoId=Kpil5BojG3E&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]

export async function GET(req: NextRequest) {
  const access_token = req.cookies.get("access_token")?.value;

  const videoId = "Kpil5BojG3E";
  const url = `https://youtube.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}`;
  const res: CaptionListData = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json());

  console.log(res.items);

  return NextResponse.json({ caption: res.items }, { status: 200 });
}
