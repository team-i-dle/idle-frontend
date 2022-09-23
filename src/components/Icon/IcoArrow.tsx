import * as React from "react";
import { SVGProps } from "react";

const SvgIcoArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.828 5.828h18a2 2 0 0 1 2 2v18a2 2 0 1 1-4 0V12.657L9.243 26.243a2 2 0 1 1-2.829-2.829L20 9.828H6.828a2 2 0 1 1 0-4Z"
      fill="#4DF2B7"
    />
  </svg>
);

export default SvgIcoArrow;
