import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgRotateCcwSquare = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path d="M20 9V7a2 2 0 0 0-2-2h-6" vectorEffect="non-scaling-stroke" />
    <path d="m15 2-3 3 3 3" vectorEffect="non-scaling-stroke" />
    <path
      d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRotateCcwSquare)
export default ForwardRef
