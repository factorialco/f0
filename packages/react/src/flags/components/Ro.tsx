import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgRo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M170.667 512.275H8.828C6.48675 512.275 4.24147 510.855 2.58595 508.328C0.930441 505.801 0.000265162 502.374 0 498.801L0 13.7492C0.000265162 10.1757 0.930441 6.74871 2.58595 4.22188C4.24147 1.69505 6.48675 0.275307 8.828 0.274902H170.667V512.275Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M170.67 0.276367H341.34V512.275H170.67V0.276367Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M503.172 512.275H341.333V0.276367H503.172C505.513 0.276772 507.759 1.69651 509.414 4.22334C511.07 6.75017 512 10.1772 512 13.7507V498.802C512 502.375 511.07 505.802 509.414 508.329C507.758 510.855 505.513 512.275 503.172 512.275Z"
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
const ForwardRef = forwardRef(SvgRo)
export default ForwardRef
