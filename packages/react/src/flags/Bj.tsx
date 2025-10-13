import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgBj = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FFE15A"
        d="M512 257.454H0.000488281V13.9809C0.000753443 10.3935 0.930927 6.95309 2.58644 4.41638C4.24195 1.87967 6.48723 0.454386 8.82847 0.453979H503.173C505.514 0.454386 507.759 1.87967 509.415 4.41638C511.07 6.95309 512 10.3935 512 13.9809V257.454Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0.000488281 257.454H512V499.032C512 502.592 511.07 506.005 509.415 508.522C507.759 511.039 505.514 512.454 503.172 512.454H8.82849C6.48724 512.454 4.24196 511.039 2.58644 508.522C0.930929 506.005 0.000753443 502.592 0.000488281 499.032L0.000488281 257.454Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M171 512.454H8.84571C6.49989 512.454 4.25023 511.034 2.59149 508.507C0.932744 505.98 0.000753961 502.553 0.000488281 498.98L0.000488281 13.9283C0.000753961 10.3548 0.932744 6.9278 2.59149 4.40097C4.25023 1.87413 6.49989 0.454384 8.84571 0.453979H171V512.454Z"
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
const ForwardRef = forwardRef(SvgBj)
export default ForwardRef
