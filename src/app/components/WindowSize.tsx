"use client";

import { useEffect, useState } from "react";

export const WindowSize = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <span>
      {dimensions.width}&times;{dimensions.height}
    </span>
  );
};
