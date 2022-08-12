import * as React from "react";
import { SVGProps } from "react";

const SvgEditSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.042 8.52c.312-.33.517-.763.557-1.243l.001-.007c.002-.024.002-.052.002-.08 0-.472-.216-.893-.555-1.17l-.003-.002-3.061-3.06a2.056 2.056 0 0 0-1.247-.557L16.73 2.4a1.693 1.693 0 0 0-1.252.556l-.002.001L2.4 16.035v5.566h5.564L21.042 8.52Zm-4.122-4.8 3.36 3.36-2.904 2.9-3.36-3.36 2.904-2.9ZM3.72 20.28v-3.276l9.226-9.228 3.278 3.276-9.233 9.228H3.72Z"
      fill={props.color}
    />
  </svg>
);

export default SvgEditSimple;
