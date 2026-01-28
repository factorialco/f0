import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgInProgressTask = (
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
    <circle
      cx={12}
      cy={12}
      r={8}
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      d="M11.9999 18C15.3136 18 17.9999 15.3137 17.9999 12C17.9999 8.68629 15.3136 6 11.9999 6V18Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgInProgressTask)
export default ForwardRef
