import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgCo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M646.737 384H-134.737V498.526C-134.737 502.099 -133.317 505.526 -130.79 508.053C-128.263 510.58 -124.836 512 -121.263 512H633.262C636.836 512 640.263 510.58 642.79 508.053C645.316 505.526 646.736 502.099 646.737 498.526V384Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M646.737 256.001H-134.737V13.4743C-134.737 9.90081 -133.317 6.47381 -130.79 3.94698C-128.263 1.42014 -124.836 0.000404721 -121.263 0H633.262C636.836 0.000404721 640.263 1.42014 642.79 3.94698C645.316 6.47381 646.736 9.90081 646.737 13.4743V256.001Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M-134.737 256.001H646.735V384.001H-134.737V256.001Z"
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
const ForwardRef = forwardRef(SvgCo)
export default ForwardRef
