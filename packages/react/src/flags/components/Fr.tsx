import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgFr = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 509" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#41479B"
        d="M170.667 509H8.828C6.48675 509 4.24147 507.589 2.58595 505.078C0.930441 502.568 0.000265162 499.163 0 495.612L0 13.663C0.000265162 10.1124 0.930441 6.7073 2.58595 4.19663C4.24147 1.68596 6.48675 0.275304 8.828 0.274902H170.667V509Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M170.67 0.276367H341.34V509H170.67V0.276367Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M503.172 509H341.333V0.276367H503.172C505.513 0.276769 507.759 1.68743 509.414 4.1981C511.07 6.70876 512 10.1138 512 13.6645V495.613C512 499.164 511.07 502.569 509.414 505.079C507.758 507.59 505.513 509 503.172 509Z"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0H512V509H0z" vectorEffect="non-scaling-stroke" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgFr)
export default ForwardRef
