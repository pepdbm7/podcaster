import React from "react";

const SummarySkeleton = () => {
  return (
    <svg
      role="img"
      aria-labelledby="loading-aria"
      width="240"
      height="98"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading summary</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="20"
        clipPath="url(#clip-path)"
        id="outerBox"
        fill="url('#fill')"
      />
      <rect
        x="0"
        y="36"
        width="100%"
        height="60"
        clipPath="url(#clip-path)"
        id="outerBox"
        fill="url('#fill')"
      />
      <defs>
        <linearGradient id="fill">
          <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="1.59996" stopColor="#ecebeb" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SummarySkeleton;
