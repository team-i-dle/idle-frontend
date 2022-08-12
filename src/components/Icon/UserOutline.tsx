import * as React from "react";
import { SVGProps } from "react";

const SvgUserOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 11.85h.043a4.8 4.8 0 0 0 3.352-8.194 5.625 5.625 0 0 0-3.437-1.405A4.8 4.8 0 0 0 12 11.85Zm-.074-8.04a4.08 4.08 0 0 1 2.4.982A3.222 3.222 0 0 1 15 8.268a3.25 3.25 0 0 1-2.999 2.022 3.25 3.25 0 0 1-3.24-3.212 3.24 3.24 0 0 1 3.165-3.268ZM15.601 13.35h-7.2a6 6 0 0 0-6 6v2.4h19.2v-2.4a6 6 0 0 0-6-6Zm4.44 6.84H3.961v-.84a4.44 4.44 0 0 1 4.44-4.44h7.2a4.44 4.44 0 0 1 4.44 4.44v.84Z"
      fill={props.color}
    />
  </svg>
);

export default SvgUserOutline;
