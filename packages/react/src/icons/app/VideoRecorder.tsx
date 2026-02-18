import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgVideoRecorder = (
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
    <rect
      width={13}
      height={12}
      x={4}
      y={6}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={3}
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 11L21 9V15L17 13V11Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVideoRecorder)
export default ForwardRef
