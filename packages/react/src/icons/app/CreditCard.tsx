import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCreditCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 10V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V10M20 10V9C20 7.34315 18.6569 6 17 6H7C5.34315 6 4 7.34315 4 9V10M20 10H4"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 14H10"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCreditCard)
export default ForwardRef
