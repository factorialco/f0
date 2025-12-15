import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgHeart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.0625 6C12.875 6 12 8 12 8C12 8 11.125 6 8.9375 6C7.1875 6 5 7.71429 5 10.2857C5 14.5714 12 19 12 19C12 19 19 14.5714 19 10.2857C19 8.14286 17.25 6 15.0625 6Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHeart)
export default ForwardRef
