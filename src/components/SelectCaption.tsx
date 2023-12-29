import { CaptionData } from "@/app/api/youtube/list/[videoId]/route";
import { useSession } from "@/hooks/useSession";
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

  const { session } = useSession();

  useEffect(() => {
    if (!session) return;
    fetch(`/api/youtube/list/${videoId}`)
      .then((res) => res.json())
      .then((resCaptionList) => {
        setCaptionList(resCaptionList);
        setLoading(false);
      });
  }, [session, videoId]);

  const clickCaption = (captionId: string) => {
    router.push(`?caption=${captionId}`);
  };

  if (!session) return <>로그인 후 이용해주세요</>;
  if (loading) return <>loading...</>;
  // TODO: 에러처리
  if (!captionList?.caption)
    return <>에러가 발생하였습니다. 다시 시도 해주세요</>;
  return (
    <>
      {captionList?.caption.map((caption) => {
        return (
          <div key={caption.id} className="w-40 shadow-md text-center p-1">
            {caption.snippet.language}
            <button onClick={() => clickCaption(caption.id)}>선택</button>
          </div>
        );
      })}
    </>
  );
}
