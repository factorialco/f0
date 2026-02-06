import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgGlobe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      r={8}
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 12H5.00001"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M12 20C10.2326 18.1964 9.00001 14.7247 9.00001 12C9.00001 9.27527 10.2326 5.80363 12 4"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M12 20C13.7674 18.1964 15 14.7247 15 12C15 9.27527 13.7674 5.80363 12 4"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGlobe)
export default ForwardRef
