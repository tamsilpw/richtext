import React from "react";
import { sampleQuestion } from "./types";
import Option from "./Option";

const TestEngine = () => {
  return (
    <div className="flex flex-col gap-3 p-3">
      <section className="flex flex-row gap-3 items-center">
        <div className="text-sm bg-[#414347] text-[#ffff] h-7 w-7 rounded-full flex items-center justify-center">
          {sampleQuestion?.serial}
        </div>
        <div className="flex flex-col pl-3 border-l border-[#CBCBCB]">
          <span className="font-semibold text-base">
            {sampleQuestion?.meta?.text}
          </span>
          <span className="font-normal text-sm text-[#757575]">
            {sampleQuestion?.meta?.subText}
          </span>
        </div>
      </section>
      <span
        className="text-[16px]"
        dangerouslySetInnerHTML={{ __html: sampleQuestion?.text }}
      ></span>
      {sampleQuestion?.options.map((option) => (
        <Option key={option._id} {...option} onClick={() => {}} />
      ))}
      {sampleQuestion?.isSolutionEnabled && (
        <>
          <div className="h-[0.5px] my-3 bg-[#CBCBCB]"></div>
          <span className="font-semibold text-lg">Solution</span>
          <span
            dangerouslySetInnerHTML={{ __html: sampleQuestion?.solution }}
          ></span>
          {sampleQuestion?.videoSolution?.url && (
            <button className="border border-[#5a4bda] shadow-none outline-none w-fit px-8 py-2 mx-auto rounded-lg text-[#5a4bda] text-base font-semibold">
              See video solution
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default TestEngine;
