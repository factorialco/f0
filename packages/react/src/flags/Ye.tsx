import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgYe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M0 341.193H512V498.127C512 501.695 511.07 505.116 509.414 507.639C507.759 510.162 505.513 511.579 503.172 511.58H8.828C6.48675 511.579 4.24147 510.162 2.58595 507.639C0.930441 505.116 0.000265162 501.695 0 498.127L0 341.193Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M8.828 0.420898H503.173C505.514 0.421302 507.76 1.83871 509.415 4.3614C511.071 6.88409 512.001 10.3055 512.001 13.8731V170.807H0V13.8716C0.000265197 10.3041 0.930472 6.88286 2.58601 4.36042C4.24156 1.83797 6.48684 0.420898 8.828 0.420898Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 170.801H512V341.181H0V170.801Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#464655"
        d="M-134.318 340.967H646.317V497.99C646.316 501.56 644.898 504.983 642.374 507.507C639.85 510.031 636.427 511.45 632.857 511.45H-120.858C-124.428 511.45 -127.851 510.031 -130.375 507.507C-132.899 504.983 -134.317 501.56 -134.318 497.99V340.967Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M-120.858 0H632.859C636.428 0.000404287 639.852 1.41862 642.376 3.94275C644.9 6.46687 646.318 9.8902 646.318 13.4599V170.483H-134.318V13.4583C-134.317 9.88882 -132.899 6.46564 -130.375 3.94176C-127.851 1.41788 -124.428 -2.2901e-08 -120.858 0Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
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
const ForwardRef = forwardRef(SvgYe)
export default ForwardRef
