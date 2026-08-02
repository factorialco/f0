import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgArrowDown = (
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
      strokeLinejoin="round"
      d="M18 13L12 19L6.00002 13"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 5L12 18.5"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowDown)
export default ForwardRef
