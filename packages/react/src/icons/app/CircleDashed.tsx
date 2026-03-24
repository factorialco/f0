import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCircleDashed = (
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
      r={8.5}
      stroke="currentColor"
      strokeWidth={1.8}
      strokeDasharray="0.1 4.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCircleDashed)
export default ForwardRef
