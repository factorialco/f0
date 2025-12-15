import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgBg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#FF4B55"
        d="M0.000488281 341.448H512V498.947C512 502.528 511.07 505.962 509.415 508.493C507.759 511.025 505.514 512.448 503.172 512.448H8.82849C6.48724 512.448 4.24196 511.025 2.58644 508.493C0.930929 505.962 0.000753443 502.528 0.000488281 498.947L0.000488281 341.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M8.82847 0.44812H503.173C505.514 0.448526 507.759 1.87104 509.415 4.40281C511.07 6.93459 512 10.3683 512 13.9488V171.448H0.000488281V13.9488C0.000753443 10.3683 0.930927 6.93459 2.58644 4.40281C4.24195 1.87104 6.48723 0.448526 8.82847 0.44812Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M0.000488281 171.448H512V341.448H0.000488281V171.448Z"
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
const ForwardRef = forwardRef(SvgBg)
export default ForwardRef
