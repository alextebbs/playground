"use client";

export const AgentString = () => {
  const agentString = navigator.userAgent;
  return <>{agentString.toString()}</>;
};
