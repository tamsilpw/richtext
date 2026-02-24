import { type Question, sampleQuestion as mock } from "./utils/types";
import TestEngineLayout from "./utils/TestEngineLayout";
import { useSearchParams } from "react-router-dom";

const TestEngine = () => {
  const [searchParams] = useSearchParams();
  const question = encodeURIComponent(JSON.stringify(mock));

  const rawTextParam = (searchParams.get("question") as string) || question;
  const decoded = rawTextParam ? decodeURIComponent(rawTextParam) : "{}";
  const currentQuestion = JSON.parse(decoded) as Question;

  return (
    <TestEngineLayout currentQuestion={currentQuestion || ({} as Question)} />
  );
};

export default TestEngine;
