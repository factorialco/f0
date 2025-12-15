import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgAm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        fill="#FFB400"
        d="M0.000488281 341H512V498.499C512 502.08 511.07 505.514 509.415 508.045C507.759 510.577 505.514 512 503.172 512H8.82849C6.48724 512 4.24196 510.577 2.58644 508.045C0.930929 505.514 0.000753443 502.08 0.000488281 498.499L0.000488281 341Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M8.82847 0H503.173C505.514 0.000405512 507.759 1.42292 509.415 3.95469C511.07 6.48647 512 9.92017 512 13.5006V171H0.000488281V13.5006C0.000753443 9.92017 0.930927 6.48647 2.58644 3.95469C4.24195 1.42292 6.48723 0.000405512 8.82847 0Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M0.000488281 171H512V341H0.000488281V171Z"
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
const ForwardRef = forwardRef(SvgAm)
export default ForwardRef
