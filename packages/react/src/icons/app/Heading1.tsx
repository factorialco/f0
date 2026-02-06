import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgHeading1 = (
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
      d="M5 7V12M5 17V12M5 12H12V7V17"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 7V17"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 9C17 9 18 8 18 7"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHeading1)
export default ForwardRef
