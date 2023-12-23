import { TLANGS_Type, TLANG_MAP } from "@/constants/tlang";
import { Caption, generateCaption } from "@/util/captions";
import { useState } from "react";

export function useTranslateCaption(captionId: string | null) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [caption, setCaption] = useState<Caption[]>([]);
  const [language, setLanguage] = useState<string>("");

  const requestTranslate = (caption: TLANGS_Type) => {
    setError(false);
    setLoading(true);
    if (!captionId) return setError(true);
    fetch(`/api/youtube/download/${captionId}/${caption}`, {
      // credentials: "include",
    })
      .then((res) => {
        if (res.ok) return res.json();
        else setError(true);
      })
      .then((data) => {
        setLanguage(TLANG_MAP[caption]);
        setCaption(generateCaption(data.caption));
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    requestTranslate,
    translateLoading: loading,
    translateError: error,
    translateCaption: caption,
    language,
  };
}
