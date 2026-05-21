import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgCursorClick = (
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
      strokeWidth={1.33}
      d="M4.93 4.54l14.14 5.39c.6.22.59.36.14.62l-5.56 2.85c-.46.23-.66.41-.89.86l-2.89 5.31c-.22.39-.4.4-.55 0L4.34 5.22c-.21-.69-.14-.84.59-.68Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCursorClick)
export default ForwardRef
