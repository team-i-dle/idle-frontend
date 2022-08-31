import * as React from "react";
import { SVGProps } from "react";

const SvgUserFillWide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.958 2.25a4.8 4.8 0 0 0-4.752 4.8v.044-.002a4.8 4.8 0 0 0 4.8 4.758h.044-.002a4.8 4.8 0 0 0 4.758-4.8v-.044.002A4.786 4.786 0 0 0 15.4 3.656a5.579 5.579 0 0 0-3.428-1.405l-.014-.001ZM8.406 13.344h7.2a6 6 0 0 1 6 6v2.4h-19.2v-2.4a6 6 0 0 1 6-6Z"
      fill={props.color}
    />
  </svg>
);

export default SvgUserFillWide;
