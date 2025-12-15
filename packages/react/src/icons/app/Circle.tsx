import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <rect
      width={16}
      height={16}
      x={4}
      y={4}
      fill="currentColor"
      rx={8}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCircle)
export default ForwardRef
