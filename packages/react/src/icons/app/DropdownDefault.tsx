import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgDropdownDefault = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <rect
      width={16}
      height={16}
      x={4}
      y={4}
      fill="#052657"
      fillOpacity={0.06}
      rx={4}
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M8.5 10.25L12 13.75L15.5 10.25"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDropdownDefault)
export default ForwardRef
