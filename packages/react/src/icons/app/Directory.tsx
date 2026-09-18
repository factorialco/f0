import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgDirectory = (
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
    <path fill="currentColor" d="icon" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="Vector"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="Vector_2"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDirectory)
export default ForwardRef
