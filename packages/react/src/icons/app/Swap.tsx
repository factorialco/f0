import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgSwap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.0005 16L6.00049 16M6.00049 16L9.00049 13M6.00049 16L9.00049 19"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.00049 8L18.0005 8M18.0005 8L15.0005 5M18.0005 8L15.0005 11"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSwap)
export default ForwardRef
