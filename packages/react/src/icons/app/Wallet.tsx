import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgWallet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M4 7V16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16V12C20 10.3431 18.6569 9 17 9H16"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M6 5H15C16.1046 5 17 5.89543 17 7V9H6C4.89543 9 4 8.10457 4 7C4 5.89543 4.89543 5 6 5Z"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={16.25}
      cy={13.75}
      r={1.25}
      fill="currentColor"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWallet)
export default ForwardRef
