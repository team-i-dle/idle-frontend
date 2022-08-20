import * as React from "react";
import { SVGProps } from "react";

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.938 5.07a4.5 4.5 0 0 0-6.375 0l1.064 1.066a3.01 3.01 0 0 1 2.904-.78 3.009 3.009 0 0 1 1.35 5.032l-6.001 6a3.003 3.003 0 0 1-5.028-1.342 3.007 3.007 0 0 1 .775-2.904l1.059-1.064-1.059-1.065-1.064 1.065a4.5 4.5 0 0 0 0 6.375 4.498 4.498 0 0 0 3.188 1.298c1.2.004 2.354-.47 3.202-1.32l6-6a4.5 4.5 0 0 0-.015-6.36V5.07ZM3.143 18.614a2.996 2.996 0 0 1 0-4.252l6-6a2.997 2.997 0 0 1 4.252 0c.562.568.871 1.338.855 2.138a3.003 3.003 0 0 1-.877 2.137l-1.59 1.613 1.064 1.064 1.59-1.59a4.512 4.512 0 1 0-6.382-6.382l-6 6a4.501 4.501 0 0 0 0 6.383 4.504 4.504 0 0 0 3.195 1.274 4.547 4.547 0 0 0 3.21-1.32l-1.066-1.064a3 3 0 0 1-4.252 0h.001Z"
      fill={props.color}
    />
  </svg>
);

export default SvgLink;