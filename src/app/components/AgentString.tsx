"use client";

import { useEffect, useState } from "react";

export const AgentString = () => {
  const [agentString, setAgentString] = useState("");

  useEffect(() => {
    setAgentString(navigator.userAgent);
  }, []);

  return <>{agentString.toString()}</>;
};
