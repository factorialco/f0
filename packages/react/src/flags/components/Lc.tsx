import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgLc = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#6CF"
        d="M633.059 512H-121.059C-124.631 512 -128.056 510.581 -130.582 508.055C-133.107 505.53 -134.526 502.104 -134.526 498.533V13.742C-134.526 10.1704 -133.107 6.74523 -130.582 4.21976C-128.056 1.69428 -124.631 0.275307 -121.059 0.274902H633.061C636.632 0.275307 640.057 1.69428 642.583 4.21976C645.108 6.74523 646.527 10.1704 646.528 13.742V498.533C646.527 502.105 645.107 505.53 642.582 508.055C640.056 510.581 636.631 512 633.059 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="currentColor"
        d="M103.45 417.841L255.999 396.484L408.549 417.841L255.999 41.0439L103.45 417.841Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="currentColor"
        d="M124.044 417.841L256 396.484L387.955 417.841L256 91.3853L124.044 417.841Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FCD116"
        d="M103.45 417.841H408.549L255.999 228.68L103.45 417.841Z"
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
const ForwardRef = forwardRef(SvgLc)
export default ForwardRef
