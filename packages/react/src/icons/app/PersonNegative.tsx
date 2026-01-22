import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgPersonNegative = (
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
      d="M10 5.53513C10.5883 5.19479 11.2714 5 12 5C14.2091 5 16 6.79086 16 9C16 9.86776 15.7237 10.671 15.2542 11.3265"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M7.8 11C8.19371 11.8258 8.86219 12.4953 9.68718 12.8904"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 18C7 18 8.5 16 12 16C12.3536 16 12.6867 16.0204 13 16.0571"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M5 5L19 19"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPersonNegative)
export default ForwardRef
