import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgReceipt = (
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
      strokeLinecap="round"
      d="M18 6.99999L18 18.8258C18 19.6801 16.9979 20.141 16.3492 19.585L15.1663 18.5711C14.7851 18.2444 14.2207 18.2509 13.8472 18.5865L12.6599 19.653C12.2785 19.9957 11.6998 19.9944 11.32 19.65L10.1531 18.5921C9.77987 18.2537 9.21318 18.2458 8.83066 18.5737L7.65079 19.585C7.00211 20.141 6 19.6801 6 18.8258L6 6.99999C6 5.34313 7.34314 3.99999 9 3.99999L15 3.99998C16.6569 3.99998 18 5.34313 18 6.99999Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M9 8H15"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M9 12H13"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgReceipt)
export default ForwardRef
