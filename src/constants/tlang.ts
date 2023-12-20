export type TLANGS_Type = (typeof TLANGS)[number];

export const TLANGS = ["ko", "ja", "en", "zh"] as const;

export const TLANG_MAP = {
  ko: "한국어",
  en: "영어",
  ja: "일본어",
  zh: "중국어",
};
