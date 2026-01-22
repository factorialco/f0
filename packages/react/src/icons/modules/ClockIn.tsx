import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgClockIn = (
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
      d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11.4648C11 12.1335 11.3342 12.758 11.8906 13.1289L14.4453 14.8321C14.9048 15.1384 15.5257 15.0142 15.8321 14.5547C16.1384 14.0952 16.0142 13.4743 15.5547 13.1679L13 11.4648V9Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClockIn)
export default ForwardRef
