import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgEyeVisible = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M20 12C19 9 16 6 12 6C8 6 5 9 4 12C5 15 8 18 12 18C16 18 19 15 20 12Z"
      vectorEffect="non-scaling-stroke"
    />
    <circle cx={12} cy={12} r={2.35} stroke="currentColor" vectorEffect="non-scaling-stroke" />
  </svg>
)
const ForwardRef = forwardRef(SvgEyeVisible)
export default ForwardRef
