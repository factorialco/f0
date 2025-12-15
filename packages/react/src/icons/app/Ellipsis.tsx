import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgEllipsis = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <circle
      cx={12}
      cy={12}
      r={1.5}
      fill="currentColor"
      transform="rotate(90 12 12)"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={12}
      cy={6.5}
      r={1.5}
      fill="currentColor"
      transform="rotate(90 12 6.5)"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={12}
      cy={17.5}
      r={1.5}
      fill="currentColor"
      transform="rotate(90 12 17.5)"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgEllipsis)
export default ForwardRef
