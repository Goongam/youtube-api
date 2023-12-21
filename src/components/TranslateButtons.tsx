import { TLANGS, TLANGS_Type, TLANG_MAP } from "@/constants/tlang";

interface Props {
  requestTranslate: (tlang: TLANGS_Type) => void;
}

export default function TranslateButtons({ requestTranslate }: Props) {
  return (
    <article className="text-center">
      <span className="text-xs md:text-sm">언어 선택</span>
      <div className="flex flex-row shadow-md p-1 text-center">
        {TLANGS.map((tlang: TLANGS_Type) => (
          <button
            key={tlang}
            className="m-1 p-2 hover:shadow-inner border border-black text-xs md:text-sm"
            onClick={() => requestTranslate(tlang)}
          >
            {TLANG_MAP[tlang]}
          </button>
        ))}
      </div>
    </article>
  );
}
