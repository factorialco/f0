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
      d="M19 14.12L16 14.12L12.75 14.12C11.1232 14.12 10.3098 14.12 9.63754 13.9633C7.4127 13.4445 5.6755 11.7073 5.15674 9.48245C5 8.81024 5 7.99682 5 6.37M19 14.12L15.5 17.62M19 14.12L15.5 10.62"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgReply)
export default ForwardRef
