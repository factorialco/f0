import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgInfoCircleLine = (
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
      strokeLinejoin="round"
      d="M12 12V15"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={12}
      cy={12}
      r={8}
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9V9.1"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgInfoCircleLine)
export default ForwardRef
