import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMoveTop = (
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
    <path
      stroke="currentColor"
      d="M13 19H7C5.89543 19 5 18.1046 5 17V6.99998C5 5.89541 5.89543 4.99998 7 4.99998H9.80017"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.00041 3L10.0004 5L8.00041 7"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      d="M14 2.65002H18C18.7456 2.65002 19.35 3.25444 19.35 4.00002V6.00002C19.35 6.74561 18.7456 7.35002 18 7.35002H14C13.2544 7.35002 12.65 6.74561 12.65 6.00002V4.00002C12.65 3.25444 13.2544 2.65002 14 2.65002Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M14 9.65002H18C18.7456 9.65002 19.35 10.2544 19.35 11L19.35 13C19.35 13.7456 18.7456 14.35 18 14.35H14C13.2544 14.35 12.65 13.7456 12.65 13L12.65 11C12.65 10.2544 13.2544 9.65002 14 9.65002Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M14 16.65H18C18.7456 16.65 19.35 17.2544 19.35 18V20C19.35 20.7456 18.7456 21.35 18 21.35H14C13.2544 21.35 12.65 20.7456 12.65 20V18C12.65 17.2544 13.2544 16.65 14 16.65Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMoveTop)
export default ForwardRef
