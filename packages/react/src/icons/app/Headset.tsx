import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgHeadset = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      d="M15 13.75C15 12.7835 15.7462 12 16.6667 12C18.5076 12 20 13.567 20 15.5C20 17.433 18.5076 19 16.6667 19C15.7462 19 15 18.2165 15 17.25V13.75Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M9 13.75C9 12.7835 8.25381 12 7.33333 12C5.49238 12 4 13.567 4 15.5C4 17.433 5.49238 19 7.33333 19C8.25381 19 9 18.2165 9 17.25V13.75Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 15V12.25C4 7.69365 7.58172 4 12 4C16.4183 4 20 7.69365 20 12.25V15"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHeadset)
export default ForwardRef
