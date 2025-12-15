import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgLineChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="406"
    height="179"
    viewBox="0 0 406 179"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M406 1L352.178 11.5985C343.237 13.359 334.653 16.5974 326.777 21.1805L270.327 54.031L208.727 80.0238C204.915 81.6326 200.986 82.9506 196.974 83.9662L146.837 96.6597C139.431 98.5348 132.323 101.436 125.72 105.279L80.2168 131.758C71.6933 136.718 62.3449 140.1 52.6208 141.742L1.12057e-05 150.623"
      stroke="#E51943"
      strokeOpacity="0.1"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path
      d="M203 82.4405L270.327 54.031L338.673 14.2578L406 1V179H0V150.623L67.3266 139.26L135.673 99.4862L203 82.4405Z"
      fill="url(#paint0_linear_3715_9085)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3715_9085"
        x1="203"
        y1="179"
        x2="203"
        y2="1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E51943" stopOpacity="0" />
        <stop offset="1" stopColor="#E51943" stopOpacity="0.05" />
      </linearGradient>
    </defs>
  </svg>
)

const ForwardRef = forwardRef(SvgLineChart)
export default ForwardRef
