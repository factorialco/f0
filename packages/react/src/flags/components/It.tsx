import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgIt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#73AF00"
        d="M170.667 512H8.828C6.48675 512 4.24147 510.581 2.58595 508.055C0.930441 505.53 0.000265162 502.104 0 498.533L0 13.742C0.000265162 10.1704 0.930441 6.74523 2.58595 4.21976C4.24147 1.69428 6.48675 0.275307 8.828 0.274902H170.667V512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M170.67 0.276367H341.34V512H170.67V0.276367Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M503.172 512H341.333V0.276367H503.172C505.513 0.276772 507.759 1.69575 509.414 4.22122C511.07 6.7467 512 10.1719 512 13.7434V498.534C512 502.106 511.07 505.531 509.414 508.056C507.758 510.581 505.513 512 503.172 512Z"
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
const ForwardRef = forwardRef(SvgIt)
export default ForwardRef
