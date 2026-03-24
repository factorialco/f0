import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgWifi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path d="M12 20h.01" vectorEffect="non-scaling-stroke" />
    <path d="M2 8.82a15 15 0 0 1 20 0" vectorEffect="non-scaling-stroke" />
    <path d="M5 12.859a10 10 0 0 1 14 0" vectorEffect="non-scaling-stroke" />
    <path d="M8.5 16.429a5 5 0 0 1 7 0" vectorEffect="non-scaling-stroke" />
  </svg>
)
const ForwardRef = forwardRef(SvgWifi)
export default ForwardRef
