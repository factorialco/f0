import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgAt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M512 0H0V512H512V0Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M512 170.392H0.000488281V13.1983C0.000753443 9.6248 0.930927 6.1978 2.58644 3.67097C4.24195 1.14414 6.48723 -0.275596 8.82847 -0.276001H503.173C505.514 -0.275596 507.759 1.14414 509.415 3.67097C511.07 6.1978 512 9.6248 512 13.1983V170.392ZM503.172 511.724H8.82847C6.48723 511.724 4.24195 510.304 2.58644 507.777C0.930927 505.25 0.000753443 501.823 0.000488281 498.25L0.000488281 341.058H512V498.25C512 501.823 511.069 505.251 509.414 507.777C507.758 510.304 505.513 511.724 503.172 511.724Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0.000488281 169.724H512V339.724H0.000488281V169.724Z"
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
const ForwardRef = forwardRef(SvgAt)
export default ForwardRef
