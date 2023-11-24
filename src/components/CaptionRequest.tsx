"use client";

import { useSearchParams } from "next/navigation";

export default function CaptionRequest() {
  const request = () => {
    fetch("/api/youtube", {
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return <button onClick={request}>자막요청</button>;
}
