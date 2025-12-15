import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgEqualAproximately = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.66667 9.26642C7.11112 6.51742 9.55556 7.32196 12 9.33333C14.4445 11.3447 16.8889 12.1492 19.3333 9.40025"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.66667 14.5998C7.11112 11.8508 9.55556 12.6553 12 14.6667C14.4445 16.678 16.8889 17.4826 19.3333 14.7336"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgEqualAproximately)
export default ForwardRef
