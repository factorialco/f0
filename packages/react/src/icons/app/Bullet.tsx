import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgBullet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 7C7.75 7 7 7.75 7 10C7 12.25 7.75 13 10 13C12.25 13 13 12.25 13 10C13 7.75 12.25 7 10 7Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBullet)
export default ForwardRef
