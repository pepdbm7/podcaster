import React from "react";
import { SkeletonSvg } from "./ListSkeleton.styles";

const ListSkeleton = () => (
  <SkeletonSvg
    role="img"
    width="100%"
    height="109em"
    aria-labelledby="loading-list"
    preserveAspectRatio="none"
  >
    <title id="loading-list">Loading list</title>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      clipPath="url(#clip-path)"
      id="outerBox"
      fill="url('#fill')"
    ></rect>
    <defs>
      <clipPath id="clip-path">
        <circle cx="45" cy="23" r="22" />
        <circle cx="9" cy="49" r="8" />
        <rect x="0" y="24" rx="0" ry="0" width="89" height="48" />
        <circle cx="155" cy="22" r="22" />
        <circle cx="119" cy="48" r="8" />
        <rect x="110" y="23" rx="0" ry="0" width="89" height="48" />
        <circle cx="266" cy="22" r="22" />
        <circle cx="230" cy="48" r="8" />
        <rect x="221" y="23" rx="0" ry="0" width="89" height="48" />
        <circle cx="376" cy="21" r="22" />
        <circle cx="340" cy="47" r="8" />
        <rect x="331" y="22" rx="0" ry="0" width="89" height="48" />
        <circle cx="44" cy="144" r="22" />
        <circle cx="8" cy="170" r="8" />
        <rect x="-1" y="145" rx="0" ry="0" width="89" height="48" />
        <circle cx="154" cy="143" r="22" />
        <circle cx="118" cy="169" r="8" />
        <rect x="109" y="144" rx="0" ry="0" width="89" height="48" />
        <circle cx="265" cy="143" r="22" />
        <circle cx="229" cy="169" r="8" />
        <rect x="220" y="144" rx="0" ry="0" width="89" height="48" />
        <circle cx="375" cy="142" r="22" />
        <circle cx="339" cy="168" r="8" />
        <rect x="330" y="143" rx="0" ry="0" width="89" height="48" />
        <circle cx="41" cy="266" r="22" />
        <circle cx="5" cy="292" r="8" />
        <rect x="-4" y="267" rx="0" ry="0" width="89" height="48" />
        <circle cx="151" cy="265" r="22" />
        <circle cx="115" cy="291" r="8" />
        <rect x="106" y="266" rx="0" ry="0" width="89" height="48" />
        <circle cx="262" cy="265" r="22" />
        <circle cx="226" cy="291" r="8" />
        <rect x="217" y="266" rx="0" ry="0" width="89" height="48" />
        <circle cx="372" cy="264" r="22" />
        <circle cx="336" cy="290" r="8" />
        <rect x="327" y="265" rx="0" ry="0" width="89" height="48" />
        <circle cx="39" cy="385" r="22" />
        <circle cx="3" cy="413" r="8" />
        <rect x="-6" y="386" rx="0" ry="0" width="89" height="48" />
        <circle cx="149" cy="384" r="22" />
        <circle cx="113" cy="412" r="8" />
        <rect x="104" y="385" rx="0" ry="0" width="89" height="48" />
        <circle cx="260" cy="384" r="22" />
        <circle cx="224" cy="412" r="8" />
        <rect x="215" y="385" rx="0" ry="0" width="89" height="48" />
        <circle cx="370" cy="383" r="22" />
        <circle cx="334" cy="411" r="8" />
        <rect x="325" y="384" rx="0" ry="0" width="89" height="48" />
        <circle cx="47" cy="502" r="22" />
        <circle cx="11" cy="528" r="8" />
        <rect x="2" y="503" rx="0" ry="0" width="89" height="48" />
        <circle cx="157" cy="501" r="22" />
        <circle cx="121" cy="527" r="8" />
        <rect x="112" y="502" rx="0" ry="0" width="89" height="48" />
        <circle cx="268" cy="501" r="22" />
        <circle cx="232" cy="527" r="8" />
        <rect x="223" y="502" rx="0" ry="0" width="89" height="48" />
        <circle cx="378" cy="500" r="22" />
        <circle cx="342" cy="526" r="8" />
        <rect x="333" y="501" rx="0" ry="0" width="89" height="48" />
        <circle cx="46" cy="623" r="22" />
        <circle cx="10" cy="649" r="8" />
        <rect x="1" y="624" rx="0" ry="0" width="89" height="48" />
        <circle cx="156" cy="622" r="22" />
        <circle cx="120" cy="648" r="8" />
        <rect x="111" y="623" rx="0" ry="0" width="89" height="48" />
        <circle cx="267" cy="622" r="22" />
        <circle cx="231" cy="648" r="8" />
        <rect x="222" y="623" rx="0" ry="0" width="89" height="48" />
        <circle cx="377" cy="621" r="22" />
        <circle cx="341" cy="647" r="8" />
        <rect x="332" y="622" rx="0" ry="0" width="89" height="48" />
        <circle cx="42" cy="745" r="22" />
        <circle cx="6" cy="771" r="8" />
        <rect x="-3" y="746" rx="0" ry="0" width="89" height="48" />
        <circle cx="152" cy="744" r="22" />
        <circle cx="116" cy="770" r="8" />
        <rect x="107" y="745" rx="0" ry="0" width="89" height="48" />
        <circle cx="263" cy="744" r="22" />
        <circle cx="227" cy="770" r="8" />
        <rect x="218" y="745" rx="0" ry="0" width="89" height="48" />
        <circle cx="373" cy="743" r="22" />
        <circle cx="337" cy="769" r="8" />
        <rect x="328" y="744" rx="0" ry="0" width="89" height="48" />
        <circle cx="41" cy="866" r="22" />
        <circle cx="5" cy="892" r="8" />
        <rect x="-4" y="867" rx="0" ry="0" width="89" height="48" />
        <circle cx="151" cy="865" r="22" />
        <circle cx="115" cy="891" r="8" />
        <rect x="106" y="866" rx="0" ry="0" width="89" height="48" />
        <circle cx="262" cy="865" r="22" />
        <circle cx="226" cy="891" r="8" />
        <rect x="217" y="866" rx="0" ry="0" width="89" height="48" />
        <circle cx="372" cy="864" r="22" />
        <circle cx="336" cy="890" r="8" />
        <rect x="327" y="865" rx="0" ry="0" width="89" height="48" />
      </clipPath>
      <linearGradient id="fill">
        <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1.59996" stopColor="#ecebeb" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity="1">
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </SkeletonSvg>
);

export default ListSkeleton;
