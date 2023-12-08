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
    <section>
      <Progress degree={getDegree(currentView)} />
      {VIEW_MAPPING[currentView]}
    </section>
  );
}

function getDegree(progress: string): number {
  if (progress === "none") return 1;
  else if (progress === "list") return 2;
  else if (progress === "caption") return 3;
  else return 1;
}
