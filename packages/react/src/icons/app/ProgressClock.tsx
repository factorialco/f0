import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgProgressClock = (
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
      d="M12 12V4a8 8 0 0 1 6.928 4z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgProgressClock)
export default ForwardRef
