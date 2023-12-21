import { Caption } from "@/util/captions";

interface Props {
  captions: Caption[];
  modify?: boolean;
  loading?: boolean;
}
export default function CaptionListView({
  captions,
  modify = false,
  loading = false,
}: Props) {
  if (loading) return <div className="flex-1">loading...</div>;

  return (
    <div className="flex flex-col gap-1 flex-1">
      {captions.map(({ endTime, startTime, text }, i) => (
        <div
          key={i}
          className="flex flex-col shadow-md rounded-sm p-2 m-2 min-h-[100px]"
        >
          <div className="text-black/50 text-xs md:text-sm">
            {startTime} - {endTime}
          </div>
          {modify ? (
            <textarea className="h-full w-full resize-none text-xs md:text-sm">
              {text}
            </textarea>
          ) : (
            <div className="text-xs md:text-sm">{text}</div>
          )}
        </div>
      ))}
    </div>
  );
}
