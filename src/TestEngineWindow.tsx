import React from "react";
import type { Question } from "./utils/types";
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

  return (
    <TestEngineLayout currentQuestion={currentQuestion || ({} as Question)} />
  );
};

export default TestEngineWindow;
