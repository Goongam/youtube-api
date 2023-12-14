import { TLANGS } from "@/constants/tlang";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function TranslateRequest() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [caption, setCaption] = useState("");

  const captionId = searchParams.get("caption");

  const requestTranslate = (caption: string) => {
    setLoading(true);
    fetch(`/api/youtube/download/${captionId}/${caption}`, {
      // credentials: "include",
    })
      .then((res) => {
        if (res.ok) return res.json();
        else setError(true);
      })
      .then((data) => {
        setCaption(data.caption);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) return <>loading...</>;
  if (error) return <>error...</>;

  return (
    <>
      <div className="w-32 border border-black">
        {TLANGS.map((tlang) => (
          <div key={tlang}>
            <button onClick={() => requestTranslate(tlang)}>
              {tlang}으로 자막 번역
            </button>
          </div>
        ))}
      </div>
      <div className="flex-1 border border-black">
        {caption && (
          <div>
            <h2>-번역된 자막-</h2>
            <div>{caption}</div>
          </div>
        )}
      </div>
    </>
  );
}
