import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgSc = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M5.9935 512H763.061C766.646 512 770.085 510.575 772.62 508.04C775.156 505.504 776.58 502.066 776.581 498.48V340.757L-0.0986328 510.377C1.7529 511.332 3.76523 512 5.9935 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M253.843 -1.72363H5.99332C2.4078 -1.72323 -1.03075 -0.298704 -3.56609 2.23664C-6.10144 4.77199 -7.52596 8.21054 -7.52637 11.7961L-7.52637 498.48C-7.52637 501.5 -6.34868 504.145 -4.6748 506.397L253.843 -1.72363Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M-3.52468 508.069L515.21 -1.72363H253.843L-4.6748 506.396C-4.2705 506.942 -4.00709 507.591 -3.52468 508.069Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M763.059 -1.72363H515.21L-3.5249 508.069C-2.96286 508.626 -2.21091 508.94 -1.55851 509.394L776.579 169.518V11.7961C776.578 8.21054 775.154 4.77199 772.618 2.23664C770.083 -0.298704 766.645 -1.72323 763.059 -1.72363Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-0.0985616 510.377L776.578 340.758V169.518L-1.55957 509.394C-1.0741 509.731 -0.626914 510.108 -0.0985616 510.377Z"
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
const ForwardRef = forwardRef(SvgSc)
export default ForwardRef
