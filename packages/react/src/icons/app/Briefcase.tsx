import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgBriefcase = (
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
      height={12}
      x={4}
      y={7}
      stroke="currentColor"
      rx={3}
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M8.9999 6.99998V5.99998C8.9999 4.89542 9.89533 3.99998 10.9999 3.99998H12.9999C14.1045 3.99998 14.9999 4.89542 14.9999 5.99998V6.99998"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M7.9999 6.99998V19"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M15.9999 6.99998V19"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBriefcase)
export default ForwardRef
