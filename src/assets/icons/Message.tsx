import type { SVGProps } from "react";

export const Message = ( props: SVGProps < SVGSVGElement > ) => (
  <svg { ...props } viewBox="0 0 48 36" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M44 4L22 26M44 4L30 44L22 26M44 4L4 18L22 26"
      stroke="currentColor"
      fill="none"
    />
  </svg>
);