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
      <main className="flex flex-col justify-start items-center w-full p-1 min-h-[24rem] shadow-sm rounded-md border border-gray-500/30 bg-white">
        <h2 className="text-4xl font-extrabold my-10">
          유튜브 자막 번역 및 업로드
        </h2>
        {VIEW_MAPPING[currentView]}
      </main>
      {
        <section className="flex flex-col w-full justify-center items-center mt-3">
          <h2 className="text-4xl font-extrabold">유튜브 자막 번역기</h2>
          <div className="py-4 px-10 text-lg text-center">
            직접 업로드 한 영상의 자막을 다른 언어로 간편하게 번역해 업로드 할
            수 있습니다. 내가 업로드한 영상의 구글 계정으로 로그인 후 영상
            링크를 입력하세요. 번역할 자막과 언어를 선택하고 수정해
            업로드하세요!
          </div>
        </section>
      }
    </section>
  );
}

function getDegree(progress: string): number {
  if (progress === "none") return 1;
  else if (progress === "list") return 2;
  else if (progress === "caption") return 3;
  else return 1;
}
