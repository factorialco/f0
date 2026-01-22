import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgIl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M632.855 511.449H-120.856C-124.426 511.449 -127.849 510.03 -130.373 507.506C-132.897 504.982 -134.316 501.559 -134.316 497.989V13.4598C-134.316 9.89015 -132.897 6.46684 -130.373 3.94273C-127.849 1.41861 -124.426 0.000404285 -120.856 0H632.857C636.427 0.000404285 639.85 1.41861 642.374 3.94273C644.898 6.46684 646.316 9.89015 646.317 13.4598V497.989C646.316 501.559 644.897 504.982 642.373 507.506C639.849 510.03 636.425 511.449 632.855 511.449Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-134.316 94.2153H646.315V417.235H-134.316V94.2153Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M325.935 255.725L360.9 195.164H290.971L256 134.593L221.03 195.164H151.101L186.066 255.725L151.101 316.286H221.03L256 376.857L290.97 316.286H360.899L325.935 255.725ZM326.595 214.971L314.5 235.92L302.405 214.971H326.595ZM303.065 255.725L279.535 296.479H232.464L208.935 255.725L232.465 214.971H279.536L303.065 255.725ZM256 174.207L268.1 195.165H243.9L256 174.207ZM185.405 214.971H209.594L197.498 235.92L185.405 214.971ZM185.405 296.479L197.5 275.53L209.595 296.479H185.405ZM256 337.243L243.9 316.285H268.1L256 337.243ZM314.5 275.53L326.595 296.479H302.406L314.5 275.53Z"
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
const ForwardRef = forwardRef(SvgIl)
export default ForwardRef
