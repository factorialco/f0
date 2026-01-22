import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgDk = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M0 0H512V512H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M655.996 511.999H-98.5257C-102.099 511.998 -105.526 510.579 -108.053 508.052C-110.58 505.525 -112 502.098 -112 498.525V13.4743C-112 9.90078 -110.58 6.47379 -108.053 3.94696C-105.526 1.42014 -102.099 0.000404719 -98.5257 0H655.997C659.571 0.000404719 662.998 1.42014 665.525 3.94696C668.052 6.47379 669.471 9.90078 669.472 13.4743V498.525C669.471 502.098 668.051 505.525 665.524 508.052C662.997 510.579 659.57 511.998 655.996 511.999Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M669.47 215.579H211.367V0.00146484H130.526V215.579H-112V296.421H130.526V511.999H211.367V296.421H669.47V215.579Z"
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
const ForwardRef = forwardRef(SvgDk)
export default ForwardRef
