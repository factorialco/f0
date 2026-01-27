import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgAe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#73AF00"
        d="M512 0H0V512H512V0Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M512 170H159V-0.000488281H503.175C505.516 -8.51405e-05 507.76 1.41411 509.415 3.93108C511.07 6.44805 512 9.86167 512 13.4212V170Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#464655"
        d="M503.175 512H159V342H512V498.578C512 502.137 511.071 505.551 509.416 508.068C507.76 510.585 505.516 512 503.175 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M159 170H512V342H159V170Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M159 512H8.83421C6.49144 511.999 4.24471 510.579 2.58812 508.053C0.931532 505.526 0.000753615 502.099 0.000488281 498.525L0.000488281 13.4738C0.000753615 9.90031 0.931532 6.47331 2.58812 3.94648C4.24471 1.41965 6.49144 -8.35608e-05 8.83421 -0.000488281H159V512Z"
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
const ForwardRef = forwardRef(SvgAe)
export default ForwardRef
