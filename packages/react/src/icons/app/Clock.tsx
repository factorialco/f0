import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <circle cx={12} cy={12} r={8} stroke="currentColor" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9V12L15.5 14"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClock)
export default ForwardRef
