import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgWindows = (
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
    <title>{"Windows"}</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 4L11.4628 5.24738V11.4067H20V4ZM20 20.2501V12.7255L11.4628 12.71V18.9003L20 20.2501ZM10.3286 12.6633V18.7916L4.0046 17.9073V12.6323L10.3286 12.6633ZM10.3286 5.35601L4 6.24035L4.00307 11.4843H10.3286V5.35601Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWindows)
export default ForwardRef
