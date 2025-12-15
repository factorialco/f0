import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgTh = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 514 512" ref={ref} {...props}>
    <g stroke="currentColor" clipPath="url(#a)">
      <path
        fill="#A51931"
        d="M-137.796 0H651.796V87.9037H-137.796V0Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F4F5F8"
        d="M-137.796 87.9033H651.796V175.807H-137.796V87.9033Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#2D2A4A"
        d="M-137.796 175.808H651.796V336.193H-137.796V175.808Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F4F5F8"
        d="M-137.796 336.193H651.796V424.097H-137.796V336.193Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#A51931"
        d="M-137.796 424.097H651.796V512H-137.796V424.097Z"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0H514V512H0z" vectorEffect="non-scaling-stroke" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgTh)
export default ForwardRef
