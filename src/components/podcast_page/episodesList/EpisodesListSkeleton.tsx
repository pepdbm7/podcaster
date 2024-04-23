import React from "react";

const EpisodesListSkeleton = () => {
  return (
    <svg
      role="img"
      aria-labelledby="loading-episodesList"
      width="662"
      height="800"
      preserveAspectRatio="none"
    >
      <title id="loading-episodesList">Loading podcast episodes list</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="70"
        clipPath="url(#clip-path)"
        id="outerBox"
        fill="url('#fill')"
      />
      <rect
        x="0"
        y="90"
        width="100%"
        height="100%"
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

export default EpisodesListSkeleton;
