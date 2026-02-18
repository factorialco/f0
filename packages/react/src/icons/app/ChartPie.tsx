import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgChartPie = (
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
      strokeLinejoin="round"
      d="M11 13H18C18 16.866 14.866 20 11 20C7.13401 20 4 16.866 4 13C4 9.13401 7.13401 6 11 6V13Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M14 4C17.3137 4 20 6.68629 20 10H14V4Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChartPie)
export default ForwardRef
