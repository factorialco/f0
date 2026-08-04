import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMinimizeHorizontal = (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.9 12L14.12 12M14.12 12L16.95 9.17M14.12 12L16.95 14.83"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.1 12L9.88 12M9.88 12L7.05 9.17M9.88 12L7.05 14.83"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMinimizeHorizontal)
export default ForwardRef
