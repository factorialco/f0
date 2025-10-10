import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgBr1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M512.001 199.817H0V96.828C0.000265162 94.4868 0.930441 92.2415 2.58595 90.586C4.24147 88.9304 6.48675 88.0003 8.828 88H503.173C505.514 88.0003 507.76 88.9304 509.415 90.586C511.071 92.2415 512.001 94.4868 512.001 96.828V199.817ZM503.172 423.449H8.828C6.48675 423.449 4.24147 422.519 2.58595 420.863C0.930441 419.208 0.000265162 416.962 0 414.621L0 311.633H512V414.621C512 416.962 511.07 419.208 509.414 420.863C507.759 422.519 505.513 423.449 503.172 423.449Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M0 199.813H512V311.625H0V199.813Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#464655"
        d="M3.256 421.315L206.097 260.3C209.043 257.962 209.043 253.488 206.097 251.149L3.256 90.135C1.311 91.754 0 94.1 0 96.828V414.621C0 417.35 1.311 419.696 3.256 421.315Z"
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
const ForwardRef = forwardRef(SvgBr1)
export default ForwardRef
