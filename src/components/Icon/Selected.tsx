import * as React from "react";
import { SVGProps } from "react";

const SvgSelected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm0 8c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#4DF2B7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.172 26.828a4 4 0 0 1 0-5.656L35 7.343 40.657 13 26.828 26.828a4 4 0 0 1-5.656 0Z"
      fill="#4DF2B7"
    />
  </svg>
);

export default SvgSelected;
