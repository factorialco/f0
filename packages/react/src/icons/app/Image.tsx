import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      d="M4 15V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M20 15L18.1213 13.1213C16.9497 11.9497 15.0503 11.9497 13.8787 13.1213L9 18"
      vectorEffect="non-scaling-stroke"
    />
    <circle cx={9} cy={11} r={2.35} stroke="currentColor" vectorEffect="non-scaling-stroke" />
  </svg>
)
const ForwardRef = forwardRef(SvgImage)
export default ForwardRef
