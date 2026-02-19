import {
  ClickType,
  OptionStatus,
  type Question,
  sampleQuestion as mock,
} from "./types";
import Option from "./Option";
import { BookmarkIcon, EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { invokeAppMethod } from "./utils/functions";
import { useSearchParams } from "react-router-dom";

const TestEngine = () => {
  const [searchParams] = useSearchParams();

  const question = encodeURIComponent(JSON.stringify(mock));

  const rawTextParam = (searchParams.get("question") as string) || question
  const decoded = rawTextParam ? decodeURIComponent(rawTextParam) : "{}";
  const sampleQuestion = JSON.parse(decoded) as Question;

  return (
    <div className="flex flex-col gap-3 p-3">
      <section className="flex flex-row gap-3 items-center">
        {sampleQuestion?.serial && (
          <div className="text-sm bg-[#414347] text-[#ffff] h-7 w-7 rounded-full flex items-center justify-center">
            {sampleQuestion?.serial}
          </div>
        )}
        <div className="flex flex-col pl-3 border-l border-[#CBCBCB] flex-1">
          <span className="font-semibold text-base">
            {sampleQuestion?.meta?.text}
          </span>
          <span className="font-normal text-sm text-[#757575]">
            {sampleQuestion?.meta?.subText}
          </span>
        </div>
        <div className="flex gap-3 items-center">
          {sampleQuestion?.isBookmarkEnabled && (
            <BookmarkIcon
              className="h-6 w-6 cursor-pointer"
              role="button"
              fill={sampleQuestion?.isBookmark ? "#7363FC" : "transparent"}
              stroke={sampleQuestion?.isBookmark ? "#7363FC" : "#1B2124"}
              onClick={() =>
                invokeAppMethod(ClickType.BOOKMARK_CLICK, sampleQuestion)
              }
            />
          )}
          {sampleQuestion?.isThreeDotsEnabled && (
            <EllipsisVerticalIcon
              height={24}
              width={24}
              className="cursor-pointer select-none outline-none"
              onClick={() =>
                invokeAppMethod(ClickType.THREE_DOTS_CLICK, sampleQuestion)
              }
            />
          )}
        </div>
      </section>
      <span
        className="text-[16px]"
        dangerouslySetInnerHTML={{ __html: sampleQuestion?.text }}
      ></span>
      {sampleQuestion?.options?.length > 0 &&
        sampleQuestion?.options.map((option) => (
          <Option
            key={option._id}
            {...option}
            onClick={() =>
              invokeAppMethod(ClickType.OPTION_CLICK, sampleQuestion, option)
            }
          />
        ))}
      {sampleQuestion?.isSolutionEnabled && (
        <>
          <div className="h-[0.5px] my-3 bg-[#CBCBCB]"></div>
          <span className="font-semibold text-lg">Solution</span>
          <span
            dangerouslySetInnerHTML={{ __html: sampleQuestion?.solution }}
          ></span>
          {sampleQuestion?.videoSolution?.url && (
            <button
              className="border border-[#5a4bda] shadow-none outline-none w-fit px-8 py-2 mx-auto rounded-lg text-[#5a4bda] text-base font-semibold"
              onClick={() =>
                invokeAppMethod(ClickType.VIDEO_SOLUTION_CLICK, sampleQuestion)
              }
            >
              See video solution
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default TestEngine;
