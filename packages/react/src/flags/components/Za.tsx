import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgZa = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#464655"
        d="M-19 94.541V417.733L196.461 256.137L-19 94.541Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M88.7314 0.275391L331.127 188.806H762.049V13.7424C762.048 10.1708 760.629 6.74569 758.104 4.22023C755.578 1.69476 752.153 0.275795 748.582 0.275391H88.7314Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M88.7314 512L331.127 323.47H762.049V498.533C762.048 502.104 760.629 505.53 758.104 508.055C755.578 510.581 752.153 512 748.582 512H88.7314Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M67.7834 0.277344H-5.53301C-9.10442 0.277344 -12.5296 1.69597 -15.0551 4.22119C-17.5806 6.74641 -18.9996 10.1714 -19 13.7428V68.9806L217.411 256.138L-19 443.3V498.531C-18.9996 502.103 -17.5806 505.528 -15.0552 508.054C-12.5297 510.579 -9.10456 511.998 -5.53301 511.998H67.7757L322.933 310.003H762.049V202.273H322.935L67.7834 0.277344Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M111.175 0.277344H67.7837L322.935 202.273H762.049V175.339H332.306L111.175 0.277344Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M-19 68.9805V103.331L174.02 256.138L-19 408.95V443.3L217.411 256.138L-19 68.9805Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M322.933 310.003L67.7754 511.999H111.168L332.302 336.937H762.048V310.003H322.933Z"
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
const ForwardRef = forwardRef(SvgZa)
export default ForwardRef
