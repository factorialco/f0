import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMoveUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      d="M12.5004 17H7C5.89543 17 5 16.1046 5 15V9C5 7.89543 5.89543 7 7 7H9.5004"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.0004 5L10.0004 7L8.0004 9"
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={6.7}
      height={6.7}
      x={12.65}
      y={3.65}
      fill="currentColor"
      stroke="currentColor"
      rx={1.35}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={6.7}
      height={6.7}
      x={12.65}
      y={13.65}
      stroke="currentColor"
      rx={1.35}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMoveUp)
export default ForwardRef
