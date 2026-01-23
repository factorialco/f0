import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgList = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 8H19"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12H19"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 16H19"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M4.5 8C4.5 7.72386 4.72386 7.5 5 7.5C5.27614 7.5 5.5 7.72386 5.5 8C5.5 8.27614 5.27614 8.5 5 8.5C4.72386 8.5 4.5 8.27614 4.5 8ZM4.5 12C4.5 11.7239 4.72386 11.5 5 11.5C5.27614 11.5 5.5 11.7239 5.5 12C5.5 12.2761 5.27614 12.5 5 12.5C4.72386 12.5 4.5 12.2761 4.5 12ZM4.5 16C4.5 15.7239 4.72386 15.5 5 15.5C5.27614 15.5 5.5 15.7239 5.5 16C5.5 16.2761 5.27614 16.5 5 16.5C4.72386 16.5 4.5 16.2761 4.5 16Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgList)
export default ForwardRef
