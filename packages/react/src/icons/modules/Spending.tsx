import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgSpending = (
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
      fill="currentColor"
      fillRule="evenodd"
      d="M6.66661 4.88904C5.19388 4.88904 4 6.08292 4 7.55565C4 7.57056 4.00012 7.58544 4.00037 7.60029V15.5555C4.00037 17.5192 5.59221 19.111 7.55584 19.111H16.4445C18.4082 19.111 20 17.5192 20 15.5555V12C20 10.3432 18.8667 8.95111 17.333 8.55651V7.55565C17.333 6.08292 16.1392 4.88904 14.6664 4.88904H6.66661ZM5.77811 7.58141C5.79174 8.06041 6.18432 8.44452 6.66661 8.44452H15.5553V7.55565C15.5553 7.06474 15.1573 6.66678 14.6664 6.66678H6.66661C6.1757 6.66678 5.77774 7.06474 5.77774 7.55565V7.55565L5.77811 7.58141ZM17.3334 13.7777C17.3334 14.5141 16.7365 15.111 16.0001 15.111C15.2637 15.111 14.6668 14.5141 14.6668 13.7777C14.6668 13.0414 15.2637 12.4444 16.0001 12.4444C16.7365 12.4444 17.3334 13.0414 17.3334 13.7777Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSpending)
export default ForwardRef
