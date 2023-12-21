"use client";
//https://www.youtube.com/watch?v=j40_yYh9OvI
import { TLANGS } from "@/constants/tlang";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import TranslateRequest from "./TranslateRequest";
import { Caption, generateCaption } from "@/util/captions";
import CaptionListView from "./CaptionListView";
import { useOriginCaption } from "@/app/hooks/useOriginCaption";

export default function CaptionRequest() {
  const searchParams = useSearchParams();
  const captionId = searchParams.get("caption");

  const { originCaption, originError, originLoading, originRequest } =
    useOriginCaption(captionId);

  if (originLoading) return <>loading...</>;
  if (originError)
    return (
      <>
        <div>에러...</div>
        <button onClick={originRequest}>다시요청</button>
      </>
    );

  return (
    <>
      {/* <button onClick={request}>자막요청</button> */}
      <div className="flex p-2 gap-2 w-full">
        <CaptionListView captions={originCaption} />
        <TranslateRequest />
      </div>
    </>
  );
}
