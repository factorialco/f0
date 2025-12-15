import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMessageFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      d="M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M7.5 10.5H16.5"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M7.5 14H11.5"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMessageFilled)
export default ForwardRef
