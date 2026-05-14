import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMarker = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7 17L6 18L3.5 20.5L4.5 17.5L5.5 14.5M7 17L5.5 14.5M7 17L14.5 9.5M5.5 14.5L14 6C14.8284 5.17157 16.1716 5.17157 17 6V6C17.8284 6.82843 17.8284 8.17157 17 9L14.5 11.5"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMarker)
export default ForwardRef
