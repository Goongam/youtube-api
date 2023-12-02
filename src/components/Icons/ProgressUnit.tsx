import React from "react";
import Check from "./Check";
import Now from "./Now";

interface Props {
  finish: boolean;
}

export default function ProgressUnit({ finish }: Props) {
  return (
    <div className="w-1/3 z-20">
      <div
        className={`${
          finish ? "bg-indigo-700" : "bg-white"
        } h-6 w-6 rounded-full shadow flex items-center justify-center`}
      >
        {finish ? <Check /> : <Now />}
      </div>
    </div>
  );
}
