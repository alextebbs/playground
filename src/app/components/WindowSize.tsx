"use client";

import { useEffect, useState } from "react";

export const WindowSize = () => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);
  return (
    <span>
      {dimensions.width}&times;{dimensions.height}
    </span>
  );
};
