import { Caption, generateCaption } from "@/util/captions";
import { useState } from "react";

export function useTranslateCaption(captionId: string | null) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [caption, setCaption] = useState<Caption[]>([]);

  const requestTranslate = (caption: string) => {
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
  };
}
