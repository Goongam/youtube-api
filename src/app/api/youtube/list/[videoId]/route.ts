import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface CaptionData {
  data: string;
}

export async function GET(req: NextRequest) {
  const access_token = req.cookies.get("access_token")?.value;
  //   console.log(access_token?.value);

  const videoId = "AUieDaY5hGuDR-tmOJEB3VonAY9p_jz11HUHfRE8CiKS";
  const url = `https://youtube.googleapis.com/youtube/v3/captions/${videoId}?key=${process.env.API_KEY}`;
  const res: CaptionData = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  console.log(res.data);

  return NextResponse.json({ caption: res.data }, { status: 200 });
}
