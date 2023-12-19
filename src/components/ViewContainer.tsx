"use client";

import CaptionRequest from "@/components/CaptionRequest";
import InputVideoURL from "@/components/InputVideoURL";
import LoginBtn from "@/components/LoginBtn";
import SelectCaption from "@/components/SelectCaption";
import { useSearchParams } from "next/navigation";
import Progress from "./Progress";

// TODO: 번역할 언어 선택 후 업로드 버튼 컴포넌트 추가
const VIEW_MAPPING = {
  caption: <CaptionRequest />,
  list: <SelectCaption />,
  none: <InputVideoURL />,
};

export default function ViewContainer() {
  // TODO: accesstoken 만료 시 재 로그인
  // TODO: 토큰 값 expires 만료시 삭제확인
  const searchParams = useSearchParams();

  const video = searchParams.get("video");
  const caption = searchParams.get("caption");

  const currentView = caption ? "caption" : video ? "list" : "none";

  return (
    <section className="w-full flex flex-col items-center px-10 gap-4">
      <Progress degree={getDegree(currentView)} />
      <div className="flex flex-col justify-start items-center w-full h-96 shadow-sm rounded-md border border-gray-500/30">
        <h2 className="text-4xl font-extrabold my-10">
          유튜브 자막 번역 및 업로드
        </h2>
        {VIEW_MAPPING[currentView]}
      </div>
    </section>
  );
}

function getDegree(progress: string): number {
  if (progress === "none") return 1;
  else if (progress === "list") return 2;
  else if (progress === "caption") return 3;
  else return 1;
}
