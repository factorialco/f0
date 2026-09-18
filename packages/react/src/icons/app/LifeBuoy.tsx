import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgLifeBuoy = (
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
    <circle cx={12} cy={12} r={8} stroke="currentColor" />
    <circle cx={12} cy={12} r={3.5} stroke="currentColor" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="m6.343 6.343 3.182 3.182"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="m17.657 6.343-3.182 3.182"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="m6.343 17.657 3.182-3.182"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="m17.657 17.657-3.182-3.182"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLifeBuoy)
export default ForwardRef
