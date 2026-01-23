import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgEe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#4173CD"
        d="M0 0H512V512H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#4173CD"
        d="M646.736 170.667H-134.735V13.4743C-134.735 9.90078 -133.315 6.47379 -130.788 3.94696C-128.262 1.42014 -124.835 0.000404719 -121.261 0H633.262C636.836 0.000404719 640.263 1.42014 642.789 3.94696C645.316 6.47379 646.736 9.90078 646.736 13.4743V170.667Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M633.261 511.999H-121.261C-124.835 511.998 -128.262 510.579 -130.788 508.052C-133.315 505.525 -134.735 502.098 -134.735 498.525V341.333H646.735V498.525C646.735 502.098 645.315 505.525 642.788 508.052C640.261 510.579 636.834 511.999 633.261 511.999Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#464655"
        d="M-134.735 170.661H646.735V341.321H-134.735V170.661Z"
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
const ForwardRef = forwardRef(SvgEe)
export default ForwardRef
