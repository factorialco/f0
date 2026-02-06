import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCalculator = (
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
      width={12}
      height={16}
      x={6}
      y={4}
      stroke="currentColor"
      rx={3}
      vectorEffect="non-scaling-stroke"
    />
    <path stroke="currentColor" d="M18 8H6" vectorEffect="non-scaling-stroke" />
    <path
      stroke="currentColor"
      d="M14 8V20"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M10 8V20"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M18 12H6"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M14 16H6"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCalculator)
export default ForwardRef
