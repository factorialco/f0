import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgPl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M0 256H512V498.526C512 502.099 511.07 505.526 509.414 508.053C507.759 510.58 505.513 512 503.172 512H8.828C6.48675 512 4.24147 510.58 2.58595 508.053C0.930441 505.526 0.000265162 502.099 0 498.526L0 256Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M512.001 256H0V13.4742C0.000265162 9.90078 0.930441 6.47378 2.58595 3.94696C4.24147 1.42014 6.48675 0.000404719 8.828 0H503.173C505.514 0.000404719 507.76 1.42014 509.415 3.94696C511.071 6.47378 512.001 9.90078 512.001 13.4742V256Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0 255.725H512V414.622C512 416.963 511.07 419.209 509.414 420.864C507.759 422.52 505.513 423.45 503.172 423.45H8.828C6.48675 423.45 4.24147 422.52 2.58595 420.864C0.930441 419.209 0.000265162 416.963 0 414.622L0 255.725Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M512.001 255.725H0V96.828C0.000265162 94.4868 0.930441 92.2415 2.58595 90.586C4.24147 88.9304 6.48675 88.0003 8.828 88H503.173C505.514 88.0003 507.76 88.9304 509.415 90.586C511.071 92.2415 512.001 94.4868 512.001 96.828V255.725Z"
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
const ForwardRef = forwardRef(SvgPl)
export default ForwardRef
