import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgMultitask = (
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
    <rect
      width={5}
      height={5}
      x={4}
      y={4}
      stroke="currentColor"
      rx={1}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={5}
      height={5}
      x={15}
      y={4}
      stroke="currentColor"
      rx={1}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={5}
      height={5}
      x={4}
      y={15}
      stroke="currentColor"
      rx={1}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={5}
      height={5}
      x={15}
      y={15}
      stroke="currentColor"
      rx={1}
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M9 6.5H15"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M6.5 9V15"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M17.5 9V15"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M9 17.5H15"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMultitask)
export default ForwardRef
