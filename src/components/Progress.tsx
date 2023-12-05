import Check from "./Icons/Check";
import Now from "./Icons/Now";
import ProgressUnit from "./Icons/ProgressUnit";

export default function Progress() {
  return (
    <>
      <div className="w-11/12 mx-auto my-4 relative">
        <div className="bg-gray-200 h-1 flex items-center">
          {/* <div className="w-1/3 bg-indigo-700 h-1 flex items-center"></div>
          <div className="w-1/3 bg-indigo-700 h-1 flex items-center"></div> */}
          {/* TODO: 애니메이션 주기 */}
          <div className="bg-indigo-700 z-10 w-1/3 h-1 absolute" />
          <ProgressUnit status="done" />
          <ProgressUnit status="done" />
          <ProgressUnit status="now" />
          <ProgressUnit status="none" last />
          {/* <div className="bg-white h-6 w-6 rounded-full shadow z-20" /> */}
        </div>
      </div>
    </>
  );
}
