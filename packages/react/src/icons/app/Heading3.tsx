import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgHeading3 = (
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
      d="M15 9V9C15 7.89543 15.8954 7 17 7H17.5C18.8807 7 20 8.11929 20 9.5V9.5C20 10.8807 18.8807 12 17.5 12V12"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 15V15C15 16.1046 15.8954 17 17 17H17.5C18.8807 17 20 15.8807 20 14.5V14.5C20 13.1193 18.8807 12 17.5 12V12"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 7V12M4 17V12M4 12H11V7V17"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHeading3)
export default ForwardRef
