import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgHeading6 = (
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
      d="M19 7C16.7909 7 15 8.79086 15 11V14.5"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 14.5C15 13.1193 16.1193 12 17.5 12C18.8807 12 20 13.1193 20 14.5C20 15.8807 18.8807 17 17.5 17C16.1193 17 15 15.8807 15 14.5Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHeading6)
export default ForwardRef
