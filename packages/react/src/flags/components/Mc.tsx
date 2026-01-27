import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgMc = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FF4B55"
        d="M512.001 256.137H0V13.7419C0.000265162 10.1704 0.930441 6.74521 2.58595 4.21975C4.24147 1.69428 6.48675 0.275307 8.828 0.274902H503.173C505.514 0.275307 507.76 1.69428 509.415 4.21975C511.071 6.74521 512.001 10.1704 512.001 13.7419V256.137Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 256.138H512V498.533C512 502.105 511.07 505.53 509.414 508.055C507.759 510.581 505.513 512 503.172 512H8.828C6.48675 512 4.24147 510.581 2.58595 508.055C0.930441 505.53 0.000265162 502.105 0 498.533L0 256.138Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M646.526 256.137H-134.525V13.7419C-134.525 10.1704 -133.106 6.74521 -130.58 4.21974C-128.055 1.69428 -124.63 0.275307 -121.058 0.274902H633.059C636.631 0.275307 640.056 1.69428 642.581 4.21974C645.107 6.74521 646.526 10.1704 646.526 13.7419V256.137Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-134.525 256.138H646.525V498.533C646.524 502.105 645.105 505.53 642.58 508.055C640.054 510.581 636.629 512 633.058 512H-121.058C-124.63 512 -128.055 510.581 -130.58 508.055C-133.106 505.53 -134.525 502.105 -134.525 498.533V256.138Z"
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
const ForwardRef = forwardRef(SvgMc)
export default ForwardRef
