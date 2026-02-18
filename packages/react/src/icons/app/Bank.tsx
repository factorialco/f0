import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgBank = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <rect
      width={16}
      height={4}
      x={4}
      y={16}
      stroke="currentColor"
      rx={1}
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M4 5.78078C4 5.32191 4.3123 4.92193 4.75746 4.81063L11.7575 3.06063C11.9167 3.02082 12.0833 3.02082 12.2425 3.06063L19.2425 4.81063C19.6877 4.92193 20 5.32191 20 5.78078V8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8V5.78078Z"
      vectorEffect="non-scaling-stroke"
    />
    <path stroke="currentColor" d="M6 9V16" vectorEffect="non-scaling-stroke" />
    <path
      stroke="currentColor"
      d="M18 9V16"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M14 9V16"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M10 9V16"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBank)
export default ForwardRef
