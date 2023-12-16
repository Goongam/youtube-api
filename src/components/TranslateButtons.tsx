import { TLANGS } from "@/constants/tlang";

interface Props {
  requestTranslate: (tlang: string) => void;
}

export default function TranslateButtons({ requestTranslate }: Props) {
  return (
    <div className="flex flex-col w-32 shadow-md p-1 text-center">
      {TLANGS.map((tlang) => (
        <button
          key={tlang}
          className="m-1 py-2 hover:shadow-inner border border-black"
          onClick={() => requestTranslate(tlang)}
        >
          {tlang}으로 번역
        </button>
      ))}
    </div>
  );
}
