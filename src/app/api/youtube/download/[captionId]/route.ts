import { withSession } from "@/util/withSession";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface CaptionData {
  data: string;
}

interface Params {
  params: {
    captionId: string;
  };
}

export async function GET(req: NextRequest, { params }: Params) {
  return withSession(req, async (access_token) => {
    const captionId = params.captionId;
    const url = `https://youtube.googleapis.com/youtube/v3/captions/${captionId}`;
    const res: CaptionData = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return NextResponse.json({ caption: res.data }, { status: 200 });
  });
}
