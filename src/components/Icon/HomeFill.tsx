import * as React from "react";
import { SVGProps } from "react";

const SvgHomeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.527 1.657a.748.748 0 0 1 .93 0l10.793 8.416-.93 1.178L21 10.223v9.278a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-9.286l-1.32 1.036-.93-1.186 10.777-8.408ZM10.5 13.5v6h3v-6h-3Z"
      fill={props.color}
    />
  </svg>
);

export default SvgHomeFill;
