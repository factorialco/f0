import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMaximizeHorizontal = (
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
      d="M14.12 12L21.9 12M21.9 12L19.07 9.17M21.9 12L19.07 14.83"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.88 12L2.1 12M2.1 12L4.93 9.17M2.1 12L4.93 14.83"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMaximizeHorizontal)
export default ForwardRef
