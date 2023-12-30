"use client";

import { getVideoId } from "@/util/url";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputVideoURL() {
  const [videoURL, setVideoURL] = useState(
    "https://www.youtube.com/watch?v=j40_yYh9OvI"
  );
  const [error, setError] = useState(false);

  const router = useRouter();

  const requestCaption = () => {
    setError(false);
    const id = getVideoId(videoURL);
    if (!id) {
      console.log("에러");
      setError(true);
      return;
    }
    router.push(`?video=${id}`);
  };

  return (
    <>
      <section className="flex flex-col w-full gap-2 items-center">
        {error && (
          <div className="bg-red-400 w-full p-2 rounded-md text-white font-bold text-center">
            잘못된 url을 입력하였습니다...
          </div>
        )}
        <div className="flex w-full max-w-[700px] items-center p-[2px] pl-[4px] bg-green-300">
          <input
            type="text"
            placeholder="유튜브 영상 URL입력..."
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
            className="w-full h-10 border border-black rounded-sm p-2"
          />
          <button onClick={requestCaption} className="w-20 rounded-md h-12">
            확인
          </button>
        </div>
      </section>
    </>
  );
}
