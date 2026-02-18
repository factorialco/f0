import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgBalance = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M10 19H14"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M12 13V19"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M5 12.5L19 13.5"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={7.5}
      cy={6.5}
      r={2.5}
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={17}
      cy={7.5}
      r={2.5}
      fill="currentColor"
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBalance)
export default ForwardRef
