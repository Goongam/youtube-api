"use client";
//https://www.youtube.com/watch?v=j40_yYh9OvI
import { TLANGS } from "@/constants/tlang";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import TranslateRequest from "./TranslateRequest";
import { Caption, generateCaption } from "@/util/captions";
import CaptionListView from "./CaptionListView";

export default function CaptionRequest() {
  const searchParams = useSearchParams();
  const captionId = searchParams.get("caption");

  const [caption, setCaption] = useState<Caption[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(caption);

  const request = () => {
    setLoading(true);
    fetch(`/api/youtube/download/${captionId}`, {
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

  if (loading) return <>loading...</>;
  if (error)
    return (
      <>
        <div>에러...</div>
        <button onClick={request}>다시요청</button>
      </>
    );

  return (
    <>
      <button onClick={request}>자막요청</button>
      <div className="flex p-2 gap-2">
        <CaptionListView captions={caption} />
        <TranslateRequest />
      </div>
    </>
  );
}
