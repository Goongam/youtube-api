import React from "react";
import Check from "./Check";
import Now from "./Now";

type Status = "done" | "now" | "none";
interface Props {
  status: Status;
  last?: boolean;
}

export default function ProgressUnit({ status, last }: Props) {
  return (
    <div className={`${last ?? "w-1/3"} z-20`}>
      <div
        className={`${getBackgroundColor(
          status
        )} h-6 w-6 rounded-full shadow flex items-center justify-center`}
      >
        {getInCircleShape(status)}
      </div>
    </div>
  );
}

function getBackgroundColor(status: Status) {
  console.log(status);

  if (status === "done") return "bg-indigo-700";
  else if (status === "none" || status === "now") return "bg-white";
}

function getInCircleShape(status: Status) {
  if (status === "done") return <Check />;
  else if (status === "now") return <Now />;
  return;
}
