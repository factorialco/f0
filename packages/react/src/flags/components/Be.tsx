import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgBe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#464655"
        d="M171 512.275H8.84522C6.49941 512.275 4.24974 510.855 2.591 508.328C0.932256 505.801 0.00026568 502.374 0 498.801L0 13.7492C0.00026568 10.1757 0.932256 6.74871 2.591 4.22188C4.24974 1.69505 6.49941 0.275307 8.84522 0.274902H171V512.275Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M171 0.274902H341V512.275H171V0.274902Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M503.155 512.275H341V0.274902H503.155C505.501 0.275307 507.75 1.69505 509.409 4.22189C511.068 6.74873 512 10.1757 512 13.7492V498.802C512 502.375 511.068 505.802 509.409 508.329C507.75 510.855 505.501 512.275 503.155 512.275Z"
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
const ForwardRef = forwardRef(SvgBe)
export default ForwardRef
