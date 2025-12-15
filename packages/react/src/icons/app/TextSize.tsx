import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgTextSize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6H9M14 6H9M9 6V18M13 12H16M19 12H16M16 12V18"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTextSize)
export default ForwardRef
