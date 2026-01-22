import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgNg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M170.667 511.724H8.828C6.48675 511.724 4.24147 510.305 2.58595 507.779C0.930441 505.254 0.000265162 501.828 0 498.257L0 13.467C0.000265162 9.89547 0.930441 6.47031 2.58595 3.94485C4.24147 1.41938 6.48675 0.000404502 8.828 0H170.667V511.724Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M170.67 0.00146484H341.34V511.724H170.67V0.00146484Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M503.172 511.724H341.333V0.00146484H503.172C505.513 0.00186935 507.759 1.42084 509.414 3.94631C511.07 6.47178 512 9.89693 512 13.4685V498.258C512 501.83 511.07 505.255 509.414 507.78C507.758 510.305 505.513 511.724 503.172 511.724Z"
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
const ForwardRef = forwardRef(SvgNg)
export default ForwardRef
