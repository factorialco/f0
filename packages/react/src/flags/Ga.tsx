import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgGa = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 509"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#4173CD"
        d="M0 339.425H512V495.612C512 499.162 511.07 502.568 509.414 505.078C507.759 507.589 505.513 509 503.172 509H8.828C6.48675 509 4.24147 507.589 2.58595 505.078C0.930441 502.568 0.000265162 499.162 0 495.612L0 339.425Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M8.828 0.275879H503.173C505.514 0.276281 507.76 1.68694 509.415 4.19761C511.071 6.70828 512.001 10.1134 512.001 13.664V169.851H0V13.6625C0.000265197 10.112 0.930472 6.70706 2.58601 4.19663C4.24156 1.6862 6.48684 0.275879 8.828 0.275879Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M0 169.844H512V339.413H0V169.844Z"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          d="M0 0H512V509H0z"
          vectorEffect="non-scaling-stroke"
        />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgGa)
export default ForwardRef
