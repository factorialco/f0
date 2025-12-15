import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgRecord = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <circle cx={12} cy={12} r={8} stroke="currentColor" vectorEffect="non-scaling-stroke" />
    <circle cx={12} cy={12} r={6} fill="currentColor" vectorEffect="non-scaling-stroke" />
  </svg>
)
const ForwardRef = forwardRef(SvgRecord)
export default ForwardRef
