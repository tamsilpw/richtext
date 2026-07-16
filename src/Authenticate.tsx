import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import webSDK from "./sdk/web.sdk";
import TestEngineSkeleton from "./utils/TestEngineSkeleton";

const Authenticate = ({ children }: { children: React.ReactNode }) => {
  const [searchParams] = useSearchParams();
  const [isInitialized, setIsInitialized] = useState(false);
  const [enableWithoutToken, setEnableWithoutToken] = useState(false);

  const handleParams = async () => {
    const token = searchParams.get("token") || searchParams.get("TOKEN");
    const randomId =
      searchParams.get("randomId") || searchParams.get("random_id");

    if (!!token && !!randomId) {
      // await webSDK.exchangeToken(token, randomId);
      setIsInitialized(true);
      console.log("initialized successfully");
    } else {
      // webSDK.logout();
      setEnableWithoutToken(true);
      console.log("logout successfully");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleParams();
    }
  }, [searchParams]);

  if (enableWithoutToken) return children;
  if (!isInitialized) return <TestEngineSkeleton />;
  return children;
};

export default Authenticate;
