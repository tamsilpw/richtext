import cn from "clsx";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { OptionStatus, type Option } from "./types";

interface OptionProps {

  onClick: () => void;

}

const QuestionOption = ({
  _id,
  serial,
  text,
  showSubText,
  status,
  onClick,
  subText,
  isSubTextLoading = false,
  disabled = false,
}: Option & OptionProps) => {
  return (
    <button
    key={_id}
      className={cn(
        "p-3 rounded-md  border flex flex-row items-center focus:outline-none duration-200 transition-all",
        {
          ["border-[#EFEFEF]"]: status === OptionStatus.UNMARKED,
          ["border-[#5A4BDA] bg-[#F1EFFF]"]: status === OptionStatus.MARKED,
          ["border-[#1B7938] bg-[#DFF1E4]"]: status === OptionStatus.CORRECT,
          ["border-[#BF2734] bg-[#FEE7E9]"]: status === OptionStatus.INCORRECT,
        },
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="h-8 w-8 pr-3 mr-3 border-r border-[#E0E0E0] flex items-center justify-center">
        <span className="text-lg">{serial}</span>
      </div>

      <div className="flex flex-col gap-0.5 text-start flex-1">
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
        {showSubText && (
          <>
            {isSubTextLoading ? (
              <div
                className={
                  "h-[18px] w-[150px] rounded-md bg-gray-100 animate-pulse"
                }
              />
            ) : (
              <span className="text-sm">
                <span className="text-[#757575]">
                  {subText || 0}% marked this option
                </span>
              </span>
            )}
          </>
        )}
      </div>

      {(status === OptionStatus.MARKED || status === OptionStatus.UNMARKED) && (
        <div
          className={cn(
            "h-[28px] w-[28px] border rounded-full flex items-center justify-center duration-200 transition-all",
            {
              ["border-primary"]: status === OptionStatus.MARKED,
              ["border-[#E0E0E0]"]: status === OptionStatus.UNMARKED,
            },
          )}
        >
          {status === OptionStatus.MARKED && (
            <div className="h-[18px] w-[18px] bg-primary rounded-full" />
          )}
        </div>
      )}
      {status === OptionStatus.CORRECT && (
        <CheckCircleIcon className="text-[#1B7938] h-[34px] w-[34px]" />
      )}
      {status === OptionStatus.INCORRECT && (
        <XCircleIcon className="text-[#BF2734] h-[34px] w-[34px]" />
      )}
    </button>
  );
};

export default QuestionOption;
