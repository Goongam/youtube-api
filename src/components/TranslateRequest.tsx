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

  return <></>;
}
