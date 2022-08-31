import * as React from "react";
import { SVGProps } from "react";

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.457 1.657a.748.748 0 0 0-.93 0L.75 10.065l.93 1.186L3 10.215v9.286A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-9.278l1.32 1.028.93-1.178-10.793-8.416ZM13.5 19.5h-3v-6h3v6Zm1.5 0v-6a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 13.5v6H4.5V9.044l7.5-5.84 7.5 5.85v10.447H15V19.5Z"
      fill={props.color}
    />
  </svg>
);

export default SvgHome;
