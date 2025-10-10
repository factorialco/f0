import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgNe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#73AF00"
        d="M0.000488281 341.448H512V498.947C512 502.528 511.07 505.961 509.415 508.493C507.759 511.025 505.514 512.447 503.172 512.448H8.82849C6.48724 512.447 4.24196 511.025 2.58644 508.493C0.930929 505.961 0.000753443 502.528 0.000488281 498.947L0.000488281 341.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF9B55"
        d="M8.82847 0.447754H503.173C505.514 0.448159 507.759 1.87067 509.415 4.40245C511.07 6.93422 512 10.3679 512 13.9484V171.448H0.000488281V13.9469C0.000753478 10.3665 0.930959 6.93299 2.5865 4.40146C4.24204 1.86993 6.48732 0.447754 8.82847 0.447754Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0.000488281 171.448H512V341.448H0.000488281V171.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF9B55"
        d="M256 299.862C280.377 299.862 300.138 280.101 300.138 255.724C300.138 231.347 280.377 211.586 256 211.586C231.623 211.586 211.862 231.347 211.862 255.724C211.862 280.101 231.623 299.862 256 299.862Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M-134.318 340.966H646.317V497.99C646.316 501.559 644.898 504.983 642.374 507.507C639.85 510.031 636.427 511.449 632.857 511.45H-120.858C-124.428 511.449 -127.851 510.031 -130.375 507.507C-132.899 504.983 -134.317 501.559 -134.318 497.99V340.966Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF9B55"
        d="M-120.858 0H632.859C636.428 0.000404287 639.852 1.41862 642.376 3.94275C644.9 6.46687 646.318 9.8902 646.318 13.4599V170.483H-134.318V13.4583C-134.317 9.88882 -132.899 6.46564 -130.375 3.94176C-127.851 1.41788 -124.428 -2.2901e-08 -120.858 0Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-134.318 170.477H646.317V340.954H-134.318V170.477Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF9B55"
        d="M255.999 323.021C293.166 323.021 323.296 292.892 323.296 255.725C323.296 218.558 293.166 188.429 255.999 188.429C218.833 188.429 188.703 218.558 188.703 255.725C188.703 292.892 218.833 323.021 255.999 323.021Z"
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
const ForwardRef = forwardRef(SvgNe)
export default ForwardRef
