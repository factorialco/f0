import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgHub = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <rect
      width={6}
      height={6}
      x={4.5}
      y={4.5}
      stroke="currentColor"
      strokeLinejoin="round"
      rx={3}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={6}
      height={6}
      x={4.5}
      y={13.5}
      stroke="currentColor"
      strokeLinejoin="round"
      rx={1.5}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={6}
      height={6}
      x={13.5}
      y={4.5}
      stroke="currentColor"
      strokeLinejoin="round"
      rx={1.5}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={6}
      height={6}
      x={13.5}
      y={13.5}
      stroke="currentColor"
      strokeLinejoin="round"
      rx={1.5}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHub)
export default ForwardRef
