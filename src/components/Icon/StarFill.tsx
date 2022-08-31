import * as React from "react";
import { SVGProps } from "react";

const SvgStarFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 1.5 8.587 8.416.96 9.517l5.52 5.386-1.304 7.598L12 18.915l6.826 3.586-1.306-7.598 5.52-5.377-7.627-1.11L12 1.5Z"
      fill={props.color}
    />
  </svg>
);

export default SvgStarFill;
