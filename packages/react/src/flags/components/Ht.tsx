import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgHt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#4173CD"
        d="M512.001 256.137H0V13.7419C0.000265162 10.1704 0.930441 6.74521 2.58595 4.21975C4.24147 1.69428 6.48675 0.275307 8.828 0.274902H503.173C505.514 0.275307 507.76 1.69428 509.415 4.21975C511.071 6.74521 512.001 10.1704 512.001 13.7419V256.137Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0 256.138H512V498.533C512 502.105 511.07 505.53 509.414 508.055C507.759 510.581 505.513 512 503.172 512H8.828C6.48675 512 4.24147 510.581 2.58595 508.055C0.930441 505.53 0.000265162 502.105 0 498.533L0 256.138Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#4173CD"
        d="M646.316 255.725H-134.315V13.4598C-134.315 9.89014 -132.897 6.46683 -130.373 3.94272C-127.849 1.41861 -124.425 0.000404284 -120.856 0H632.856C636.426 0.000404284 639.849 1.41861 642.373 3.94272C644.898 6.46683 646.316 9.89014 646.316 13.4598V255.725Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M-134.315 255.725H646.315V497.99C646.314 501.56 644.896 504.983 642.372 507.507C639.848 510.031 636.425 511.45 632.855 511.45H-120.856C-124.425 511.45 -127.849 510.031 -130.373 507.507C-132.897 504.983 -134.315 501.56 -134.315 497.99V255.725Z"
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
const ForwardRef = forwardRef(SvgHt)
export default ForwardRef
