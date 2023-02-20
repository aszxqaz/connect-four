import { BaseComponent } from "../types";

export const Counter: BaseComponent<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="70"
      height="75"
      viewBox="0 0 70 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Oval Copy 32" filter="url(#filter0_di_5_6175)">
        <circle cx="35" cy="35" r="32" fill="#FFCE67" />
        <circle cx="35" cy="35" r="33.5" stroke="black" strokeWidth="3" />
      </g>
      <defs>
        <filter
          id="filter0_di_5_6175"
          x="0"
          y="0"
          width="70"
          height="75"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5_6175"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5_6175"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="erode"
            in="SourceAlpha"
            result="effect2_innerShadow_5_6175"
          />
          <feOffset dy="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_5_6175"
          />
        </filter>
      </defs>
    </svg>
  );
};
