import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgSearchPerson = (
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
      strokeLinejoin="round"
      d="M6.5 16V16C8.60581 12.7243 13.3942 12.7243 15.5 16V16"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M16 16L19 19"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={11}
      cy={10.5}
      r={2.5}
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={11}
      cy={11}
      r={7}
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSearchPerson)
export default ForwardRef
