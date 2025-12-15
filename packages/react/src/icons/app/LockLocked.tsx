import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgLockLocked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 10H8C6.34315 10 5 11.3431 5 13V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13C19 11.3431 17.6569 10 16 10Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14V15"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 10V8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8V10"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLockLocked)
export default ForwardRef
