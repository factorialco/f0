import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#FF4B55"
        d="M512.001 127.933H0V13.4675C0.000265162 9.89596 0.930441 6.4708 2.58595 3.94533C4.24147 1.41987 6.48675 0.000892783 8.828 0.000488281H503.173C505.514 0.000892783 507.76 1.41987 509.415 3.94533C511.071 6.4708 512.001 9.89596 512.001 13.4675V127.933Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M0 127.932H512V255.863H0V127.932Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M0 255.863H512V383.794H0V255.863Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M503.172 511.724H8.828C6.48675 511.724 4.24147 510.305 2.58595 507.779C0.930441 505.254 0.000265162 501.829 0 498.257L0 383.793H512V498.257C512 501.829 511.07 505.254 509.414 507.78C507.759 510.305 505.513 511.724 503.172 511.724Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M646.317 127.863H-134.316V13.4598C-134.315 9.89015 -132.897 6.46684 -130.373 3.94273C-127.849 1.41861 -124.426 0.000404285 -120.856 0H632.857C636.427 0.000404285 639.85 1.41861 642.374 3.94273C644.898 6.46684 646.316 9.89015 646.317 13.4598V127.863Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M-134.316 127.863H646.315V255.725H-134.316V127.863Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M-134.316 255.726H646.315V383.587H-134.316V255.726Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M632.856 511.449H-120.856C-124.426 511.448 -127.849 510.03 -130.373 507.506C-132.897 504.982 -134.315 501.559 -134.316 497.989V383.587H646.315V497.989C646.315 501.559 644.897 504.982 642.373 507.507C639.849 510.031 636.425 511.449 632.856 511.449Z"
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
const ForwardRef = forwardRef(SvgMu)
export default ForwardRef
