import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgBd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#73AF00"
        d="M0 0H512V512H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M503.172 424.448H8.828C6.48675 424.448 4.24147 423.518 2.58595 421.862C0.930441 420.207 0.000265162 417.961 0 415.62L0 97.828C0.000265162 95.4868 0.930441 93.2415 2.58595 91.586C4.24147 89.9304 6.48675 89.0003 8.828 89H503.173C505.514 89.0003 507.76 89.9304 509.415 91.586C511.071 93.2415 512.001 95.4868 512.001 97.828V415.62C512 417.961 511.07 420.207 509.414 421.862C507.759 423.518 505.513 424.448 503.172 424.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M220.689 371.482C284.068 371.482 335.447 320.103 335.447 256.724C335.447 193.345 284.068 141.966 220.689 141.966C157.31 141.966 105.931 193.345 105.931 256.724C105.931 320.103 157.31 371.482 220.689 371.482Z"
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
const ForwardRef = forwardRef(SvgBd)
export default ForwardRef
