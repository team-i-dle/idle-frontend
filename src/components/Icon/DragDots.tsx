import * as React from "react";
import { SVGProps } from "react";

const SvgDragDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.4 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15.6 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 7.5a1.5 1.5 0 1 0 .001-2.999A1.5 1.5 0 0 0 15.6 13.5Zm0 7.5a1.5 1.5 0 1 0 .001-2.999A1.5 1.5 0 0 0 15.6 21Z"
      fill={props.color}
    />
  </svg>
);

export default SvgDragDots;
