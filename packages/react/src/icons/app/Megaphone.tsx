import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMegaphone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M17 6L13.9669 7.21324C12.6676 7.73297 11.281 8 9.88159 8H6C4.89543 8 4 8.89543 4 10V13C4 14.1046 4.89543 15 6 15H7V17.25C7 18.2165 7.7835 19 8.75 19V19C9.7165 19 10.5 18.2165 10.5 17.25V15H10.8445C11.6078 15 12.3641 15.1457 13.0728 15.4291L17 17V6Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M20 10V14"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMegaphone)
export default ForwardRef
