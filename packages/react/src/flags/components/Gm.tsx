import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgGm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#73AF00"
        d="M0 336.936H512V498.533C512 502.105 511.07 505.53 509.414 508.055C507.759 510.581 505.513 512 503.172 512H8.828C6.48675 512 4.24147 510.581 2.58595 508.055C0.930441 505.53 0.000265162 502.105 0 498.533L0 336.936Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M8.828 0.275879H503.173C505.514 0.276283 507.76 1.69526 509.415 4.22073C511.071 6.7462 512.001 10.1714 512.001 13.7429V175.34H0V13.7414C0.000265197 10.17 0.930472 6.74497 2.58601 4.21974C4.24156 1.69451 6.48684 0.275879 8.828 0.275879Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M0 175.338H512V336.935H0V175.338Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 175.338H512V202.27H0V175.338ZM0 310.002H512V336.935H0V310.002Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M-134.317 336.481H646.317V497.991C646.316 501.561 644.898 504.984 642.374 507.508C639.85 510.032 636.427 511.451 632.857 511.451H-120.857C-124.427 511.451 -127.85 510.032 -130.375 507.508C-132.899 504.984 -134.317 501.561 -134.317 497.991V336.481Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M-120.857 0H632.858C636.428 0.000404286 639.851 1.41862 642.376 3.94274C644.9 6.46686 646.318 9.89019 646.318 13.4598V174.97H-134.317V13.4583C-134.317 9.88881 -132.899 6.46564 -130.374 3.94176C-127.85 1.41788 -124.427 -2.2901e-08 -120.857 0Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M-134.317 174.969H646.317V336.479H-134.317V174.969Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-134.317 174.969H646.317V201.887H-134.317V174.969ZM-134.317 309.561H646.317V336.479H-134.317V309.561Z"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0H512V512H0z" vectorEffect="non-scaling-stroke" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgGm)
export default ForwardRef
