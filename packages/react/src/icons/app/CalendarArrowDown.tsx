import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCalendarArrowDown = (
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
      d="M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 10H19"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 15L16.5 21M16.5 21L14 18.5M16.5 21L19 18.5"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCalendarArrowDown)
export default ForwardRef
