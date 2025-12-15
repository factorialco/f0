import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMinimize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 5L13.5 10.5M13.5 10.5L17.5 10.5M13.5 10.5L13.5 6.5"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 19L10.5 13.5M10.5 13.5L6.5 13.5M10.5 13.5L10.5 17.5"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMinimize)
export default ForwardRef
