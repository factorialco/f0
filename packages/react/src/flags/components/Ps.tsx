import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgPs = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#464655"
        d="M512 200H0V15.7901C0.000265162 11.6024 0.930439 7.58645 2.58595 4.62533C4.24146 1.66422 6.48674 0.000474279 8.82798 0H503.172C505.513 0.000474279 507.759 1.66422 509.414 4.62533C511.07 7.58645 512 11.6024 512 15.7901V200Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M503.172 512H8.828C6.48675 512 4.24147 510.336 2.58595 507.375C0.930441 504.413 0.000265162 500.397 0 496.21L0 312H512V496.21C512 500.398 511.07 504.414 509.414 507.375C507.759 510.336 505.513 512 503.172 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 199.813H512V311.625H0V199.813Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M3.256 421.315L206.097 260.3C209.043 257.962 209.043 253.488 206.097 251.149L3.256 90.1348C1.311 91.7538 0 94.0998 0 96.8278V414.621C0 417.35 1.311 419.696 3.256 421.315Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#464655"
        d="M781.053 170.851H0V13.7424C0.000404503 10.1709 1.41938 6.74571 3.94485 4.22024C6.47032 1.69477 9.89548 0.275795 13.467 0.275391H767.586C771.158 0.275795 774.583 1.69477 777.108 4.22024C779.634 6.74571 781.053 10.1709 781.053 13.7424V170.851Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M767.585 512H13.467C9.89548 511.999 6.47032 510.58 3.94485 508.055C1.41938 505.529 0.000404503 502.104 0 498.533L0 341.425H781.052V498.533C781.052 502.104 779.633 505.53 777.107 508.055C774.582 510.581 771.156 512 767.585 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 170.846H781.052V341.414H0V170.846Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M4.967 508.744L314.399 263.117C318.893 259.55 318.893 252.725 314.399 249.157L4.967 3.53174C1.99992 6.00151 0 9.58031 0 13.7419V498.532C0 502.695 1.99992 506.274 4.967 508.744Z"
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
const ForwardRef = forwardRef(SvgPs)
export default ForwardRef
