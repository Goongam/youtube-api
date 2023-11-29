"use client";

import { getVideoId } from "@/util/url";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputVideoURL() {
  const [videoURL, setVideoURL] = useState("");

  const router = useRouter();

  const requestCaption = () => {
    const id = getVideoId(videoURL);
    if (!id) {
      console.log("에러");

      return; //TODO: 에러처리
    }
    router.push(`?video=${id}`);
  };

  return (
    <>
      <input
        type="text"
        placeholder="유튜브 영상 URL입력..."
        value={videoURL}
        onChange={(e) => setVideoURL(e.target.value)}
      />
      <button onClick={requestCaption}>자막요청하기</button>
    </>
  );
}
