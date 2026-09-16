import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgReply = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 9.87H8H11.25C12.8768 9.87 13.6902 9.87 14.3625 10.0267C16.5873 10.5455 18.3245 12.2827 18.8433 14.5075C19 15.1798 19 15.9932 19 17.62M8.5 13.37L5 9.87L8.5 6.37"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgReply)
export default ForwardRef
