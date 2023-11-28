import { CaptionData } from "@/app/api/youtube/list/[videoId]/route";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ResponseCaptions {
  caption: Array<CaptionData>;
}

export default function SelectCaption() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("video");
  const [captionList, setCaptionList] = useState<ResponseCaptions>();

  useEffect(() => {
    fetch(`/api/youtube/list/${videoId}`)
      .then((res) => res.json())
      .then((resCaptionList) => {
        setCaptionList(resCaptionList);
      });
  }, [videoId]);

  console.log(captionList?.caption[0].id);
  // console.log(captionList[0]);

  return (
    <>
      {captionList?.caption.map((caption) => {
        return <div key={caption.id}>{caption.id}</div>;
      })}
    </>
  );
}
