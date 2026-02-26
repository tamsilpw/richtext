import { ClickType, type Question } from "./types";
import { BookmarkIcon, EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { invokeAppMethod, makeImagesClickableInHtml } from "./functions";
import Option from "./Option";
import { CheckIcon } from "@heroicons/react/24/solid";

const TestEngineLayout = ({
  currentQuestion,
}: {
  currentQuestion: Question;
}) => {
  const handleImageClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement | null;
    const imageElement = target?.closest(
      "img[data-img-click='true']",
    ) as HTMLImageElement | null;

    if (!imageElement) {
      return;
    }

    const imageSource = imageElement.getAttribute("src") || "";
    if (!imageSource) {
      return;
    }

    invokeAppMethod(ClickType.IMG_CLICK, currentQuestion, imageSource);
  };

  return (
    <div className="flex flex-col gap-3 p-3">
      <section className="flex flex-row gap-3 items-center">
        {currentQuestion?.serial && (
          <div className="text-sm bg-[#414347] text-[#ffff] h-7 w-7 rounded-full flex items-center justify-center">
            {currentQuestion?.serial}
          </div>
        )}
        <div className="flex flex-col pl-3 border-l border-[#CBCBCB] flex-1">
          <span className="font-semibold text-base">
            {currentQuestion?.meta?.text}
          </span>
          <span className="font-normal text-sm text-[#757575]">
            {currentQuestion?.meta?.subText}
          </span>
        </div>
        <div className="flex gap-3 items-center">
          {currentQuestion?.isBookmarkEnabled && (
            <BookmarkIcon
              className="h-6 w-6 cursor-pointer"
              role="button"
              fill={currentQuestion?.isBookmark ? "#7363FC" : "transparent"}
              stroke={currentQuestion?.isBookmark ? "#7363FC" : "#1B2124"}
              onClick={() =>
                invokeAppMethod(ClickType.BOOKMARK_CLICK, currentQuestion)
              }
            />
          )}
          {currentQuestion?.isThreeDotsEnabled && (
            <EllipsisVerticalIcon
              height={24}
              width={24}
              className="cursor-pointer select-none outline-none"
              onClick={() =>
                invokeAppMethod(ClickType.THREE_DOTS_CLICK, currentQuestion)
              }
            />
          )}
        </div>
      </section>
      <span
        className="text-[16px]"
        onClick={handleImageClick}
        dangerouslySetInnerHTML={{
          __html: makeImagesClickableInHtml(currentQuestion?.text || ""),
        }}
      ></span>
      {currentQuestion?.isMarkForReviewEnabled && (
        <button
          type="button"
          className="flex items-center gap-2 w-fit mx-auto my-2"
          onClick={() => invokeAppMethod(ClickType.MARK_FOR_REVIEW_CLICK, currentQuestion)}
        >
          <span
            className={`h-5 w-5 rounded border border-[#5a4bda] flex items-center justify-center ${
              currentQuestion?.isMarkedForReview
                ? "bg-[#5a4bda]"
                : "bg-transparent"
            }`}
          >
            {currentQuestion?.isMarkedForReview && (
              <CheckIcon className="h-6 w-6 text-white" />
            )}
          </span>
          <span className="text-[#1B2124]">Mark for Review</span>
        </button>
      )}
      {currentQuestion &&
        currentQuestion?.options?.length > 0 &&
        currentQuestion?.options.map((option) => (
          <Option
            key={option._id}
            {...option}
            onClick={() =>
              invokeAppMethod(ClickType.OPTION_CLICK, currentQuestion, option)
            }
          />
        ))}
      {currentQuestion?.isSolutionEnabled && (
        <>
          <div className="h-[0.5px] my-3 bg-[#CBCBCB]"></div>
          <span className="font-semibold text-lg">Solution</span>
          <span
            onClick={handleImageClick}
            dangerouslySetInnerHTML={{
              __html: makeImagesClickableInHtml(
                currentQuestion?.solution || "",
              ),
            }}
          ></span>
          {currentQuestion?.videoSolution?.url && (
            <button
              className="border border-[#5a4bda] shadow-none outline-none w-fit px-8 py-2 mx-auto rounded-lg text-[#5a4bda] text-base font-semibold"
              onClick={() =>
                invokeAppMethod(ClickType.VIDEO_SOLUTION_CLICK, currentQuestion)
              }
            >
              See video solution
            </button>
          )}
          {currentQuestion?.references &&
            currentQuestion?.references?.length > 0 && (
              <>
                <span className="font-semibold text-lg mt-4">References</span>
                <div className="flex flex-col gap-1">
                  {currentQuestion?.references?.map((reference, index) => (
                    <span key={index} className="text-base">
                      {reference}
                    </span>
                  ))}
                </div>
              </>
            )}
        </>
      )}
    </div>
  );
};

export default TestEngineLayout;
