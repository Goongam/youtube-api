import ProgressUnit from "./Icons/ProgressUnit";

interface Props {
  degree: number;
}

export default function Progress({ degree }: Props) {
  console.log(degree);

  return (
    <>
      <div className="w-11/12 mx-auto my-4 relative">
        <div className="bg-gray-200 h-1 flex items-center">
          <div
            className={`bg-indigo-700 z-10 ${getWidth(
              degree
            )} h-1 absolute bar`}
          />
          <ProgressUnit status={getStatus(1, degree)} />
          <ProgressUnit status={getStatus(2, degree)} />
          <ProgressUnit status={getStatus(3, degree)} />
          <ProgressUnit status={getStatus(4, degree)} last />
        </div>
      </div>
    </>
  );
}

function getWidth(degree: number) {
  switch (degree) {
    case 1:
      return "w-[1px]";
    case 2:
      return "w-1/3";

    case 3:
      return "w-2/3";
    case 4:
      return "w-full";
    default:
      return;
  }
}

function getStatus(unit: number, degree: number) {
  if (degree < unit) return "none";
  else if (degree === unit) return "now";
  else return "done";
}
