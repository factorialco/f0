import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgHeading2 = (
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
      d="M15 9.5V9.5C15 8.11929 16.1193 7 17.5 7V7C18.8807 7 20 8.11929 20 9.5V9.5C20 10.8807 18.8807 12 17.5 12V12C16.1193 12 15 13.1193 15 14.5V17H20"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHeading2)
export default ForwardRef
