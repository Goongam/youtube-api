import { TLANGS, TLANGS_Type, TLANG_MAP } from "@/constants/tlang";

interface Props {
  requestTranslate: (tlang: string) => void;
}

export default function TranslateButtons({ requestTranslate }: Props) {
  return (
    <div className="flex flex-col shadow-md p-1 text-center">
      <span>언어 선택</span>
      {TLANGS.map((tlang: TLANGS_Type) => (
        <button
          key={tlang}
          className="m-1 py-2 hover:shadow-inner border border-black"
          onClick={() => requestTranslate(tlang)}
        >
          {TLANG_MAP[tlang]}
        </button>
      ))}
    </div>
  );
}
