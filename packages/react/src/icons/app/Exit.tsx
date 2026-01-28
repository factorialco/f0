import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgExit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.0001 12L19.0001 12M19.0001 12L16.0001 9.00001M19.0001 12L16.0001 15"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.0001 19L8.00011 19C6.34325 19 5.00011 17.6569 5.00011 16L5.00011 8.00001C5.00011 6.34315 6.34325 5.00001 8.00011 5.00001L11.0001 5.00001"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgExit)
export default ForwardRef
