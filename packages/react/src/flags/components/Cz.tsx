import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgCz = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#F5F5F5"
        d="M0 0H512V512H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0 392H512V532H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M-9.17912e-06 423.5L256 255.724L-8.70228e-05 88C-8.70228e-05 90.5 -6.43134e-05 94.099 -6.43134e-05 96.827V414.62C-6.43134e-05 417.349 -1.94501 421.881 -9.17912e-06 423.5Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M3.25598 421.314C4.78598 422.588 6.68098 423.448 8.82698 423.448H503.172C505.513 423.448 507.758 422.518 509.414 420.862C511.07 419.207 512 416.961 512 414.62V255.724H256L3.25598 421.314Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M3.25598 90.134C4.78598 88.86 6.68098 88 8.82698 88H503.172C505.513 88.0003 507.758 88.9304 509.414 90.586C511.07 92.2415 512 94.4868 512 96.828V255.724H256L3.25598 90.134Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M-66.0303 508.743L319.737 256L-66.0303 3.25732C-68.999 5.72843 -71 9.30917 -71 13.473V498.526C-71 502.691 -68.999 506.272 -66.0303 508.743Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M-66.0304 508.743C-63.6951 510.687 -60.8028 512 -57.5273 512H696.999C700.573 511.999 704 510.58 706.527 508.053C709.054 505.526 710.473 502.099 710.474 498.526V256H319.737L-66.0304 508.743Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-66.0304 3.25716C-63.6951 1.31263 -60.8028 0 -57.5273 0H696.999C700.573 0.000404721 704 1.42015 706.527 3.94698C709.054 6.47382 710.473 9.90083 710.474 13.4743V256H319.737L-66.0304 3.25716Z"
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
const ForwardRef = forwardRef(SvgCz)
export default ForwardRef
