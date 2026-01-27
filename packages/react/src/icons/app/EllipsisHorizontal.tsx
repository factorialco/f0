import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgEllipsisHorizontal = (
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
    <circle
      cx={12}
      cy={12}
      r={1.5}
      fill="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={6.5}
      cy={12}
      r={1.5}
      fill="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={17.5}
      cy={12}
      r={1.5}
      fill="currentColor"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgEllipsisHorizontal)
export default ForwardRef
