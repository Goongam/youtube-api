import { Caption, generateCaption } from "@/util/captions";
import { useCallback, useEffect, useState } from "react";

export function useOriginCaption(captionId: string | null) {
  const [caption, setCaption] = useState<Caption[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = useCallback(() => {
    if (!captionId) return setError(true);

    setLoading(true);
    fetch(`/api/youtube/download/${captionId}`, {
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
  }, [captionId]);

  useEffect(() => {
    request();
  }, [request]);

  return {
    originCaption: caption,
    originError: error,
    originLoading: loading,
    originRequest: request,
  };
}
