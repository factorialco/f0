import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgUa = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FFE15A"
        d="M0.000488281 257.275H512V498.854C512 502.413 511.07 505.827 509.415 508.344C507.759 510.861 505.514 512.275 503.172 512.275H8.82849C6.48724 512.275 4.24196 510.861 2.58644 508.344C0.930929 505.827 0.000753443 502.413 0.000488281 498.854L0.000488281 257.275Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#4173CD"
        d="M512 257.275H0.000488281V13.8018C0.000753443 10.2144 0.930927 6.77398 2.58644 4.23728C4.24195 1.70059 6.48723 0.275309 8.82847 0.274902H503.173C505.514 0.275309 507.759 1.70059 509.415 4.23728C511.07 6.77398 512 10.2144 512 13.8018V257.275Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M-134.313 255.724H646.314V497.988C646.314 501.558 644.895 504.981 642.371 507.505C639.847 510.029 636.424 511.447 632.854 511.448H-120.854C-124.423 511.447 -127.847 510.029 -130.371 507.505C-132.895 504.981 -134.313 501.558 -134.313 497.988V255.724Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#4173CD"
        d="M646.316 255.724H-134.313V13.4597C-134.313 9.89011 -132.895 6.46681 -130.371 3.94271C-127.847 1.41861 -124.423 0.000404283 -120.854 0H632.856C636.426 0.000404283 639.849 1.41861 642.373 3.94271C644.897 6.46681 646.315 9.89011 646.316 13.4597V255.724Z"
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
const ForwardRef = forwardRef(SvgUa)
export default ForwardRef
