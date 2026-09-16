import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgEqual = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19 10H5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 14H5"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgEqual)
export default ForwardRef
