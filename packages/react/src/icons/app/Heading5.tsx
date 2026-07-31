import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgHeading5 = (
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
      d="M4 7V12M4 17V12M4 12H11V7V17"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 7H15V12H17.5C18.8807 12 20 13.1193 20 14.5V14.5C20 15.8807 18.8807 17 17.5 17H15"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHeading5)
export default ForwardRef
