import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgAg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M512 0H0V512H512V0Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#464655"
        d="M503.172 88H8.828C6.48675 88.0003 4.24147 88.9304 2.58595 90.586C0.930441 92.2415 0.000265162 94.4868 0 96.828L0 415.172C0.000265162 417.513 0.930441 419.759 2.58595 421.414C4.24147 423.07 6.48675 424 8.828 424H503.173C505.514 424 507.76 423.07 509.415 421.414C511.071 419.759 512.001 417.513 512.001 415.172V96.828C512 94.4867 511.07 92.2414 509.414 90.5859C507.759 88.9304 505.513 88.0003 503.172 88Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0 406H512V512H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M255.999 105.655L267.194 164.137L299.915 114.391L287.878 172.705L337.146 139.267L303.709 188.536L362.023 176.498L312.276 209.22L370.758 220.414L312.276 231.608L362.023 264.33L303.709 252.292L337.146 301.56L287.878 268.123L299.915 326.437L267.194 276.691L255.999 335.172L244.806 276.691L212.083 326.437L224.122 268.123L174.853 301.56L208.291 252.292L149.977 264.33L199.723 231.608L141.241 220.414L199.723 209.22L149.977 176.498L208.291 188.536L174.853 139.267L224.122 172.705L212.083 114.391L244.806 164.137L255.999 105.655Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0 96.828V415.172C0.000265162 417.513 0.930441 419.759 2.58595 421.414C4.24147 423.07 6.48675 424 8.828 424H256L2.298 91.013C0.91 92.572 0 94.576 0 96.828Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M255.999 424H503.171C505.512 424 507.758 423.07 509.413 421.414C511.069 419.759 511.999 417.513 511.999 415.172V96.828C511.999 94.576 511.089 92.572 509.701 91.012L255.999 424Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#4173CD"
        d="M154.947 291.034H357.052L410.946 220.414H101.052L154.947 291.034Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M154.947 291.034L255.999 423.448L357.052 291.034H154.947Z"
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
const ForwardRef = forwardRef(SvgAg)
export default ForwardRef
