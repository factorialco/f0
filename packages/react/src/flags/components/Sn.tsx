import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgSn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#73AF00"
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
      <path
        fill="#73AF00"
        d="M258.04 207.471L269.733 242.533L306.692 242.82C308.759 242.837 309.616 245.474 307.953 246.701L278.221 268.656L289.369 303.895C289.992 305.866 287.749 307.496 286.067 306.294L256 284.8L225.931 306.292C224.249 307.494 222.006 305.864 222.629 303.893L233.777 268.654L204.045 246.699C202.382 245.471 203.239 242.834 205.306 242.818L242.265 242.531L253.958 207.469C254.613 205.51 257.387 205.51 258.04 207.471Z"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0H512V512H0z" vectorEffect="non-scaling-stroke" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgSn)
export default ForwardRef
