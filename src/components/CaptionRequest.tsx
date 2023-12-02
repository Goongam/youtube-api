"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CaptionRequest() {
  const searchParams = useSearchParams();
  const captionId = searchParams.get("caption");

  const [caption, setCaption] = useState("");
  const [error, setError] = useState(false);

  const request = () => {
    fetch(`/api/youtube/download/${captionId}`, {
      // credentials: "include",
    })
      .then((res) => {
        if (res.ok) return res.json();
        else setError(true);
      })
      .then((caption) => {
        setCaption(caption);
      })
      .catch(() => {
        setError(true);
      });
  };

  if (error) return <div>에러...</div>;

  return (
    <>
      <button onClick={request}>자막요청</button>
      <div>{caption}</div>
    </>
  );
}
