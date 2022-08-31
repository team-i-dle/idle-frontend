import * as React from "react";
import { SVGProps } from "react";

const SvgLaunch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.5 21h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3h6.75v1.5H4.5v15h15v-6.75H21v6.75a1.5 1.5 0 0 1-1.5 1.5ZM15.75 1.5V3h4.192L13.5 9.443l1.057 1.057L21 4.058V8.25h1.5V1.5h-6.75Z"
      fill={props.color}
    />
  </svg>
);

export default SvgLaunch;
