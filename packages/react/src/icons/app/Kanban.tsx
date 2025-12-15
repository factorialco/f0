import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgKanban = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 6.5C5 5.67157 5.67157 5 6.5 5H9C9.82843 5 10.5 5.67157 10.5 6.5V17.5C10.5 18.3284 9.82843 19 9 19H6.5C5.67157 19 5 18.3284 5 17.5V6.5Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6.5C13.5 5.67157 14.1716 5 15 5H17.5C18.3284 5 19 5.67157 19 6.5V13.5C19 14.3284 18.3284 15 17.5 15H15C14.1716 15 13.5 14.3284 13.5 13.5V6.5Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgKanban)
export default ForwardRef
