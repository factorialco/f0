import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgLu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#FF4B55"
        d="M512.001 170.851H0V13.742C0.000265162 10.1704 0.930441 6.74523 2.58595 4.21976C4.24147 1.69428 6.48675 0.275307 8.828 0.274902H503.173C505.514 0.275307 507.76 1.69428 509.415 4.21976C511.071 6.74523 512.001 10.1704 512.001 13.742V170.851Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#82AFFF"
        d="M503.172 512H8.828C6.48675 511.999 4.24147 510.58 2.58595 508.055C0.930441 505.529 0.000265162 502.104 0 498.533L0 341.425H512V498.533C512 502.104 511.07 505.53 509.414 508.055C507.759 510.581 505.513 512 503.172 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 170.845H512V341.413H0V170.845Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M646.054 170.851H-135V13.742C-135 10.1704 -133.581 6.74523 -131.055 4.21976C-128.53 1.69428 -125.105 0.275307 -121.533 0.274902H632.587C636.158 0.275307 639.584 1.69428 642.109 4.21976C644.635 6.74523 646.054 10.1704 646.054 13.742V170.851Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#82AFFF"
        d="M632.585 512H-121.533C-125.105 511.999 -128.53 510.58 -131.055 508.055C-133.581 505.529 -135 502.104 -135 498.533V341.425H646.052V498.533C646.052 502.104 644.634 505.53 642.108 508.055C639.582 510.581 636.157 512 632.585 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-135 170.845H646.052V341.413H-135V170.845Z"
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
const ForwardRef = forwardRef(SvgLu)
export default ForwardRef
