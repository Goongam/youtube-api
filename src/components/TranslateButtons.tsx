import { TLANGS } from "@/constants/tlang";

interface Props {
  requestTranslate: (tlang: string) => void;
}

export default function TranslateButtons({ requestTranslate }: Props) {
  return (
    <div className="w-32">
      {TLANGS.map((tlang) => (
        <div key={tlang}>
          <button onClick={() => requestTranslate(tlang)}>
            {tlang}으로 자막 번역
          </button>
        </div>
      ))}
    </div>
  );
}
