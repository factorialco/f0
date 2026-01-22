import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgLv = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#C8414B"
        d="M503.172 512H8.828C6.48675 512 4.24147 510.581 2.58595 508.055C0.930441 505.53 0.000265162 502.104 0 498.533L0 13.742C0.000265162 10.1704 0.930441 6.74523 2.58595 4.21976C4.24147 1.69428 6.48675 0.275307 8.828 0.274902H503.173C505.514 0.275307 507.76 1.69428 509.415 4.21976C511.071 6.74523 512.001 10.1704 512.001 13.742V498.533C512 502.105 511.07 505.53 509.414 508.055C507.759 510.581 505.513 512 503.172 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 209.005H512V303.27H0V209.005Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#C8414B"
        d="M633.059 512H-121.059C-124.631 512 -128.056 510.581 -130.582 508.055C-133.107 505.53 -134.526 502.104 -134.526 498.533V13.742C-134.526 10.1704 -133.107 6.74523 -130.582 4.21976C-128.056 1.69428 -124.631 0.275307 -121.059 0.274902H633.06C636.632 0.275307 640.057 1.69428 642.583 4.21976C645.108 6.74523 646.527 10.1704 646.527 13.742V498.533C646.527 502.105 645.107 505.53 642.582 508.055C640.056 510.581 636.631 512 633.059 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-134.526 209.005H646.526V303.27H-134.526V209.005Z"
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
const ForwardRef = forwardRef(SvgLv)
export default ForwardRef
