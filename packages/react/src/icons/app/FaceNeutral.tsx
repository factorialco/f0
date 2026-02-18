import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgFaceNeutral = (
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
      d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14H8ZM10 8C9.44772 8 9 8.44772 9 9V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V9C11 8.44772 10.5523 8 10 8ZM14 8C13.4477 8 13 8.44772 13 9V11C13 11.5523 13.4477 12 14 12C14.5523 12 15 11.5523 15 11V9C15 8.44772 14.5523 8 14 8Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFaceNeutral)
export default ForwardRef
