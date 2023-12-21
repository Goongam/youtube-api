"use client";
//https://www.youtube.com/watch?v=j40_yYh9OvI
import { useSearchParams } from "next/navigation";
import CaptionListView from "./CaptionListView";
import { useOriginCaption } from "@/hooks/useOriginCaption";
import TranslateButtons from "./TranslateButtons";
import { useTranslateCaption } from "@/hooks/useTranslateCaption";

const ERROR_STYLE =
  "flex text-center justify-center items-center w-full h-20 bg-red-300 text-white font-extrabold rounded-sm";

export default function CaptionRequest() {
  const searchParams = useSearchParams();
  const captionId = searchParams.get("caption");

  const { originCaption, originError, originLoading, originRequest } =
    useOriginCaption(captionId);

  const {
    requestTranslate,
    translateCaption,
    translateError,
    translateLoading,
  } = useTranslateCaption(captionId);

  // TODO: 에러처리

  if (originLoading) return <>loading...</>;

  if (originError)
    return (
      <>
        <div className={ERROR_STYLE}>
          자막을 불러오는 중 에러가 발생하였습니다. 다시 시도해주세요.
        </div>
        <button
          onClick={originRequest}
          className="p-2 rounded-sm bg-green-400 mt-1"
        >
          재시도
        </button>
      </>
    );

  return (
    <>
      {translateError && (
        <div className={ERROR_STYLE}>
          번역에 실패하였습니다. 다시 시도해주세요.
        </div>
      )}
      <TranslateButtons requestTranslate={requestTranslate} />
      <div className="flex p-2 gap-2 w-full">
        <CaptionListView captions={originCaption} />
        <CaptionListView
          captions={translateCaption}
          loading={translateLoading}
          modify
        />
      </div>
      <button className="w-full rounded-md p-1 text-white font-bold bg-green-400">
        업로드
      </button>
    </>
  );
}
