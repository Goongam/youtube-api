import { TLANGS } from "@/constants/tlang";
import { Caption, generateCaption } from "@/util/captions";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import CaptionListView from "./CaptionListView";
import TranslateButtons from "./TranslateButtons";
import { useTranslateCaption } from "@/hooks/useTranslateCaption";

export default function TranslateRequest() {
  const searchParams = useSearchParams();
  const captionId = searchParams.get("caption");

  const {
    requestTranslate,
    translateCaption,
    translateError,
    translateLoading,
  } = useTranslateCaption(captionId);

  // TODO: 에러처리
  if (translateError) return <>error...</>;

  return (
    <>
      <TranslateButtons requestTranslate={requestTranslate} />
      <CaptionListView
        captions={translateCaption}
        loading={translateLoading}
        modify
      />
    </>
  );
}
