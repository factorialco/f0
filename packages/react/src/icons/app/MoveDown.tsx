import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMoveDown = (
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
    <path
      stroke="currentColor"
      d="M12.5004 7H7C5.89543 7 5 7.89543 5 9V15C5 16.1046 5.89543 17 7 17H9.5004"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.0004 19L10.0004 17L8.0004 15"
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={6.7}
      height={6.7}
      x={0.65}
      y={-0.65}
      fill="currentColor"
      stroke="currentColor"
      rx={1.35}
      transform="matrix(1 0 0 -1 12 19.7)"
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={6.7}
      height={6.7}
      x={0.65}
      y={-0.65}
      stroke="currentColor"
      rx={1.35}
      transform="matrix(1 0 0 -1 12 9.7)"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMoveDown)
export default ForwardRef
