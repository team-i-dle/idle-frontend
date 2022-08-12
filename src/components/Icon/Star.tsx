import * as React from "react";
import { SVGProps } from "react";

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m12 4.89 2.07 4.184.344.75.75.113 4.62.667L16.5 13.83l-.563.547.136.75.788 4.599-4.133-2.168-.727-.308-.698.367-4.132 2.138.75-4.596.135-.752-.555-.577-3.316-3.262 5.371-.78.345-.75L12 4.89H12Zm0-3.39L8.587 8.416.96 9.516l5.52 5.386-1.306 7.597L12 18.915l6.826 3.586-1.306-7.598 5.52-5.378-7.627-1.11L12 1.501V1.5Z"
      fill={props.color}
    />
  </svg>
);

export default SvgStar;
