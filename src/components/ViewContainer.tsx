"use client";

import CaptionRequest from "@/components/CaptionRequest";
import InputVideoURL from "@/components/InputVideoURL";
import LoginBtn from "@/components/LoginBtn";
import SelectCaption from "@/components/SelectCaption";
import { useSearchParams } from "next/navigation";
import Progress from "./Progress";

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
      <Progress degree={4} />
      {VIEW_MAPPING[currentView]}
    </section>
  );
}
