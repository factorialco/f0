import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgSl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M0 341.425H512V498.532C512 502.104 511.07 505.529 509.414 508.055C507.759 510.58 505.513 511.999 503.172 511.999H8.828C6.48675 511.999 4.24147 510.58 2.58595 508.055C0.930441 505.529 0.000265162 502.104 0 498.532L0 341.425Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M8.828 0.275879H503.173C505.514 0.276283 507.76 1.69526 509.415 4.22074C511.071 6.74621 512.001 10.1714 512.001 13.7429V170.851H0V13.7414C0.000265197 10.17 0.930472 6.74499 2.58601 4.21975C4.24156 1.69452 6.48684 0.275879 8.828 0.275879Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 170.845H512V341.413H0V170.845Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M-134.526 341.425H646.526V498.533C646.526 502.104 645.107 505.529 642.581 508.055C640.056 510.58 636.63 511.999 633.059 512H-121.059C-124.631 511.999 -128.056 510.58 -130.582 508.055C-133.107 505.529 -134.526 502.104 -134.526 498.533V341.425Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M-121.059 0.276367H633.061C636.632 0.276772 640.057 1.69575 642.583 4.22122C645.108 6.7467 646.527 10.1719 646.528 13.7434V170.851H-134.526V13.7419C-134.526 10.1705 -133.107 6.74547 -130.582 4.22024C-128.056 1.695 -124.631 0.276367 -121.059 0.276367Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-134.526 170.844H646.526V341.413H-134.526V170.844Z"
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
const ForwardRef = forwardRef(SvgSl)
export default ForwardRef
