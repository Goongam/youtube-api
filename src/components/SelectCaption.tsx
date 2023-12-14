import { CaptionData } from "@/app/api/youtube/list/[videoId]/route";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ResponseCaptions {
  caption: Array<CaptionData>;
}

export default function SelectCaption() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const videoId = searchParams.get("video");
  const [captionList, setCaptionList] = useState<ResponseCaptions>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/youtube/list/${videoId}`)
      .then((res) => res.json())
      .then((resCaptionList) => {
        setCaptionList(resCaptionList);
        setLoading(false);
      });
  }, [videoId]);

  const clickCaption = (captionId: string) => {
    router.push(`?caption=${captionId}`);
  };

  if (loading) return <>loading...</>;
  if (!captionList?.caption) return <>로그인 후 이용해주세요</>;
  return (
    <>
      {captionList?.caption.map((caption) => {
        return (
          <div key={caption.id}>
            {caption.snippet.language}
            <button onClick={() => clickCaption(caption.id)}>선택</button>
          </div>
        );
      })}
    </>
  );
}
