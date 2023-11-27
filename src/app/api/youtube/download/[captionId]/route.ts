import { withSession } from "@/util/withSession";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface CaptionData {
  data: string;
}

export async function GET(req: NextRequest) {
  return withSession(req, async (access_token) => {
    const captionId = "AUieDaY5hGuDR-tmOJEB3VonAY9p_jz11HUHfRE8CiKS";
    const url = `https://youtube.googleapis.com/youtube/v3/captions/${captionId}`;
    const res: CaptionData = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log(res.data);

    return NextResponse.json({ caption: res.data }, { status: 200 });
  });
}
