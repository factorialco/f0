import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgRu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#F5F5F5"
        d="M512 171.275H0.000488281V13.7754C0.000753443 10.195 0.930927 6.76131 2.58644 4.22956C4.24195 1.69781 6.48723 0.275308 8.82847 0.274902H503.173C505.514 0.275308 507.759 1.69781 509.415 4.22956C511.07 6.76131 512 10.195 512 13.7754V171.275Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M503.172 512.275H8.82849C6.48724 512.274 4.24196 510.852 2.58644 508.32C0.930929 505.788 0.000753443 502.355 0.000488281 498.774L0.000488281 341.275H512V498.774C512 502.355 511.07 505.789 509.415 508.321C507.759 510.853 505.514 512.275 503.172 512.275Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M0.000488281 171.275H512V341.275H0.000488281V171.275Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M646.527 170.851H-134.526V13.7424C-134.525 10.1709 -133.106 6.74571 -130.581 4.22024C-128.056 1.69477 -124.63 0.275795 -121.059 0.275391H633.06C636.632 0.275795 640.057 1.69477 642.582 4.22024C645.108 6.74571 646.527 10.1709 646.527 13.7424V170.851Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M633.059 512H-121.059C-124.63 511.999 -128.056 510.58 -130.581 508.055C-133.106 505.529 -134.525 502.104 -134.526 498.533V341.425H646.526V498.533C646.526 502.104 645.107 505.53 642.581 508.055C640.056 510.581 636.63 512 633.059 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M-134.526 170.846H646.526V341.414H-134.526V170.846Z"
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
const ForwardRef = forwardRef(SvgRu)
export default ForwardRef
