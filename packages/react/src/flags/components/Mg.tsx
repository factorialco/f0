import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M512 256.137H167.724V0.276367H503.172C505.513 0.276772 507.759 1.69574 509.414 4.22121C511.07 6.74668 512 10.1718 512 13.7434V256.137Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M167.724 256.138H512V498.533C512 502.105 511.07 505.53 509.414 508.055C507.759 510.581 505.513 512 503.172 512H167.724V256.138Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M167.724 0.274902V511.998H8.828C6.48675 511.998 4.24147 510.579 2.58595 508.054C0.930441 505.528 0.000265162 502.103 0 498.531L0 13.7419C0.000265162 10.1704 0.930441 6.74521 2.58595 4.21975C4.24147 1.69428 6.48675 0.275307 8.828 0.274902H167.724Z"
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
const ForwardRef = forwardRef(SvgMg)
export default ForwardRef
