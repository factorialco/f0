import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgTd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#41479B"
        d="M171 512.276H8.84522C6.49941 512.275 4.24974 510.856 2.591 508.329C0.932256 505.802 0.00026568 502.375 0 498.802L0 13.7502C0.00026568 10.1767 0.932256 6.7497 2.591 4.22286C4.24974 1.69603 6.49941 0.276284 8.84522 0.275879H171V512.276Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M171 0.275879H341V512.276H171V0.275879Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M503.155 512.276H341V0.275879H503.155C505.501 0.276284 507.75 1.69603 509.409 4.22286C511.068 6.7497 512 10.1767 512 13.7502V498.802C512 502.375 511.068 505.802 509.409 508.329C507.75 510.856 505.501 512.276 503.155 512.276Z"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          d="M0 0H512V512H0z"
          vectorEffect="non-scaling-stroke"
        />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgTd)
export default ForwardRef
