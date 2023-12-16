import { Caption } from "@/util/captions";

interface Props {
  captions: Caption[];
  modify?: boolean;
}
export default function CaptionListView({ captions, modify = false }: Props) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      {captions.map(({ endTime, startTime, text }, i) => (
        <div
          key={i}
          className="flex flex-col shadow-md rounded-sm p-2 m-2 min-h-[100px]"
        >
          <div className="text-black/50 text-sm">
            {startTime} - {endTime}
          </div>
          {modify ? (
            <textarea className="h-full">{text}</textarea>
          ) : (
            <div>{text}</div>
          )}
        </div>
      ))}
    </div>
  );
}
