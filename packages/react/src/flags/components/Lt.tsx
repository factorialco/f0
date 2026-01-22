import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgLt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M0 341.425H512V498.532C512 502.104 511.07 505.529 509.414 508.055C507.759 510.58 505.513 511.999 503.172 511.999H8.828C6.48675 511.999 4.24147 510.58 2.58595 508.055C0.930441 505.529 0.000265162 502.104 0 498.532L0 341.425Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M8.828 0.275879H503.173C505.514 0.276283 507.76 1.69526 509.415 4.22074C511.071 6.74621 512.001 10.1714 512.001 13.7429V170.851H0V13.7414C0.000265197 10.17 0.930472 6.74499 2.58601 4.21975C4.24156 1.69452 6.48684 0.275879 8.828 0.275879Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M0 170.845H512V341.413H0V170.845Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M-134.318 340.966H646.317V497.99C646.316 501.559 644.898 504.983 642.374 507.507C639.85 510.031 636.427 511.449 632.857 511.45H-120.858C-124.428 511.449 -127.851 510.031 -130.375 507.507C-132.899 504.983 -134.317 501.559 -134.318 497.99V340.966Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M-120.858 0H632.859C636.428 0.000404287 639.852 1.41862 642.376 3.94275C644.9 6.46687 646.318 9.8902 646.318 13.4599V170.483H-134.318V13.4583C-134.317 9.88882 -132.899 6.46564 -130.375 3.94176C-127.851 1.41788 -124.428 -2.2901e-08 -120.858 0Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M-134.318 170.477H646.317V340.954H-134.318V170.477Z"
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
const ForwardRef = forwardRef(SvgLt)
export default ForwardRef
