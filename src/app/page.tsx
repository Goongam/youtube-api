"use client";

import CaptionRequest from "@/components/CaptionRequest";
import LoginBtn from "@/components/LoginBtn";
import { getVideoId } from "@/util/url";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  // TODO: accesstoken 만료 시 재 로그인
  // TODO: 토큰 값 expires 만료시 삭제확인
  const searchParams = useSearchParams();
  const [videoURL, setVideoURL] = useState("");
  const router = useRouter();
  const search = searchParams.get("search");
  const id = getVideoId(videoURL);

  const requestCaption = () => {
    if (!id) return; //TODO: 에러처리
    router.push(`?search=${id}`);
  };

  return (
    <section>
      <header>
        <LoginBtn refresh={false} />
      </header>
      {!search ? (
        <>
          <input
            type="text"
            placeholder="유튜브 영상 URL입력..."
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
          />
          <button onClick={requestCaption}>자막요청하기</button>
        </>
      ) : (
        <CaptionRequest />
      )}
    </section>
  );
}
