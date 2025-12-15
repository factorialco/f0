import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M16 16L19 19"
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={14}
      height={14}
      x={4}
      y={4}
      stroke="currentColor"
      rx={7}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSearch)
export default ForwardRef
