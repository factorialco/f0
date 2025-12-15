import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgTablet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M8 4H16C17.6569 4 19 5.34315 19 7V17C19 18.6569 17.6569 20 16 20H8C6.34315 20 5 18.6569 5 17V7C5 5.34315 6.34315 4 8 4Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M12 16V16.1"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTablet)
export default ForwardRef
