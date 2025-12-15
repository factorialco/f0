import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgDeny = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.98311 10C3.98311 6.6771 6.67686 3.98335 9.99977 3.98335C11.4271 3.98335 12.7383 4.48035 13.7698 5.31072L5.31048 13.7701C4.4801 12.7385 3.98311 11.4273 3.98311 10ZM6.22972 14.6893C7.26124 15.5197 8.57247 16.0167 9.99977 16.0167C13.3227 16.0167 16.0164 13.3229 16.0164 10C16.0164 8.57271 15.5194 7.26149 14.6891 6.22996L6.22972 14.6893ZM9.99977 2.68335C5.95889 2.68335 2.68311 5.95913 2.68311 10C2.68311 14.0409 5.95889 17.3167 9.99977 17.3167C14.0407 17.3167 17.3164 14.0409 17.3164 10C17.3164 5.95913 14.0407 2.68335 9.99977 2.68335Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDeny)
export default ForwardRef
