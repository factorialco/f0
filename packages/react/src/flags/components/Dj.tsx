import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgDj = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M0-9H512V131H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M0 392H512V532H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-1 424L256 255.724L-1.0252e-05 88C-1.94501 89.619 -9.77516e-06 94.099 -9.77516e-06 96.827V414.62C-9.77516e-06 417.349 -2.945 422.381 -1 424Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M3.2561 421.314C4.7861 422.588 6.6811 423.448 8.8271 423.448H503.172C505.513 423.448 507.759 422.518 509.414 420.862C511.07 419.207 512 416.961 512 414.62V255.724H256L3.2561 421.314Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#82AFFF"
        d="M3.2561 90.134C4.7861 88.86 6.6811 88 8.8271 88H503.172C505.513 88.0003 507.759 88.9304 509.414 90.586C511.07 92.2415 512 94.4868 512 96.828V255.724H256L3.2561 90.134Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M91.7661 215.859L82.826 242.665L54.5691 242.885C53.0201 242.897 52.3781 244.875 53.6231 245.795L76.3551 262.582L67.8321 289.524C67.3651 291.002 69.0471 292.223 70.3071 291.322L93.2961 274.891L116.285 291.322C117.545 292.222 119.227 291.001 118.76 289.524L110.237 262.582L132.966 245.794C134.212 244.874 133.57 242.896 132.02 242.884L103.763 242.664L94.8231 215.858C94.3351 214.389 92.2561 214.389 91.7661 215.859Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-39.0303 508.743L346.737 256L-39.0303 3.25732C-41.999 5.72843 -44 9.30917 -44 13.473V498.526C-44 502.691 -41.999 506.272 -39.0303 508.743Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M-39.03 508.743C-36.6948 510.687 -33.8024 512 -30.5269 512H724C727.573 511.999 731 510.58 733.527 508.053C736.054 505.526 737.474 502.099 737.474 498.526V256H346.737L-39.03 508.743Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#82AFFF"
        d="M-39.03 3.25716C-36.6948 1.31263 -33.8024 0 -30.5269 0H724C727.573 0.000404721 731 1.42015 733.527 3.94698C736.054 6.47382 737.474 9.90083 737.474 13.4743V256H346.737L-39.03 3.25716Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M96.0642 195.153L82.4189 236.068L39.2898 236.403C36.9255 236.422 35.9456 239.441 37.8459 240.845L72.5421 266.467L59.5333 307.589C58.8205 309.845 61.3878 311.709 63.311 310.334L98.3994 285.255L133.488 310.334C135.411 311.707 137.978 309.844 137.266 307.589L124.257 266.467L158.948 240.843C160.85 239.439 159.87 236.42 157.505 236.402L114.375 236.066L100.73 195.152C99.9853 192.909 96.8121 192.909 96.0642 195.153Z"
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
const ForwardRef = forwardRef(SvgDj)
export default ForwardRef
