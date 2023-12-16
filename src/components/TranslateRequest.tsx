import { TLANGS } from "@/constants/tlang";
import { Caption, generateCaption } from "@/util/captions";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import CaptionListView from "./CaptionListView";
import TranslateButtons from "./TranslateButtons";

export default function TranslateRequest() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [caption, setCaption] = useState<Caption[]>([]);

  const captionId = searchParams.get("caption");

  const requestTranslate = (caption: string) => {
    setLoading(true);
    fetch(`/api/youtube/download/${captionId}/${caption}`, {
      // credentials: "include",
    })
      .then((res) => {
        if (res.ok) return res.json();
        else setError(true);
      })
      .then((data) => {
        setCaption(generateCaption(data.caption));
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (error) return <>error...</>;

  return (
    <>
      <TranslateButtons requestTranslate={requestTranslate} />
      <CaptionListView captions={caption} loading={loading} modify />
    </>
  );
}
