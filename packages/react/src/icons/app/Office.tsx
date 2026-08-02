import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgOffice = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6 7C6 5.34315 7.34315 4 9 4H15C16.6569 4 18 5.34315 18 7V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 12H14"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 8H14"
    />
    <path
      stroke="currentColor"
      d="M10 16.5C10 15.9477 10.4477 15.5 11 15.5H13C13.5523 15.5 14 15.9477 14 16.5V20H10V16.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 20H5"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgOffice)
export default ForwardRef
