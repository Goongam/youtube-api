"use client";

import { useSearchParams } from "next/navigation";

export default function CaptionRequest() {
  const searchParams = useSearchParams();
  const captionId = searchParams.get("caption");
  const request = () => {
    fetch(`/api/youtube/download/${captionId}`, {
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return <button onClick={request}>자막요청</button>;
}
