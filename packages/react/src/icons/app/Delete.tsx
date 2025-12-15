import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgDelete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8V17C17 18.6569 15.6569 20 14 20H10C8.34315 20 7 18.6569 7 17V8M17 8H15.5M17 8H18.5M7 8H8.5M7 8H5.5M15.5 8V5C15.5 4.44772 15.0523 4 14.5 4L9.5 4C8.94772 4 8.5 4.44772 8.5 5V8M15.5 8H8.5"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDelete)
export default ForwardRef
