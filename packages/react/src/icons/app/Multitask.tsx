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
      strokeLinejoin="round"
      d="M12 8H20"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 7.333 5.5 9 9 6"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 11.333 5.5 13 9 10"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 15.333 5.5 17 9 14"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12H20"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16H20"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMultitask)
export default ForwardRef
