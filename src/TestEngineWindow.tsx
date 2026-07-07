import React, { useEffect } from "react";
import { sampleQuestion, type Question } from "./utils/types";
import TestEngineLayout from "./utils/TestEngineLayout";

declare global {
  interface Window {
    updateQuestion: (question: Question) => void;
  }
}

const TestEngineWindow = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState<Question | null>(
    null,
  );

  window.updateQuestion = function (question: Question) {
    setCurrentQuestion(question);
  };

  // useEffect(()=>{
  //   setCurrentQuestion(sampleQuestion)
  // },[])

  return (
    <TestEngineLayout currentQuestion={currentQuestion || ({} as Question)} />
  );
};

export default TestEngineWindow;
