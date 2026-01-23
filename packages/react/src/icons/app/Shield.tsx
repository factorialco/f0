import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgShield = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M5 11.4038L5 6L6.63836 5.5319C7.87494 5.17859 9.06442 4.67747 10.181 4.03941L12 3L13.819 4.03941C14.9356 4.67747 16.1251 5.17859 17.3616 5.5319L19 6V11.4038C19 13.1235 18.7853 14.8943 17.7189 16.2435C15.6012 18.9228 12 21 12 21C12 21 8.39876 18.9228 6.28107 16.2435C5.21473 14.8943 5 13.1235 5 11.4038Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgShield)
export default ForwardRef
