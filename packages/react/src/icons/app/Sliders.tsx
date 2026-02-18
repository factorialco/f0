import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgSliders = (
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
      d="M8 13.0001L8 21.0001"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M16 3.00006L16 11.0001"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M8.00001 3.00006L8.00001 4.00006"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M16 20.0001L16 21.0001"
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={6}
      height={3}
      x={5}
      y={7}
      stroke="currentColor"
      rx={1.5}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={6}
      height={3}
      x={13}
      y={14}
      stroke="currentColor"
      rx={1.5}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSliders)
export default ForwardRef
