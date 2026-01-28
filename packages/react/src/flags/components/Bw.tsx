import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgBw = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#82AFFF"
        d="M0 0H512V512H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#82AFFF"
        d="M503.172 423.448H8.828C6.48675 423.448 4.24147 422.518 2.58595 420.862C0.930441 419.207 0.000265162 416.961 0 414.62L0 96.828C0.000265162 94.4868 0.930441 92.2415 2.58595 90.586C4.24147 88.9304 6.48675 88.0003 8.828 88H503.173C505.514 88.0003 507.76 88.9304 509.415 90.586C511.071 92.2415 512.001 94.4868 512.001 96.828V414.62C512 416.961 511.07 419.207 509.414 420.862C507.759 422.518 505.513 423.448 503.172 423.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#464655"
        d="M0 229.241H511.999V282.206H0V229.241Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 211.586H511.999V229.241H0V211.586ZM0 282.207H511.999V299.862H0V282.207Z"
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
const ForwardRef = forwardRef(SvgBw)
export default ForwardRef
