import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgGr = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#F5F5F5"
        d="M0 57.1375H781.052V113.996H0V57.1375ZM0 170.845H781.052V227.703H0V170.845ZM0 284.569H781.052V341.427H0V284.569Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M0 341.432H781.052V398.29H0V341.432Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 398.276H781.052V455.134H0V398.276Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M13.4671 512H767.587C771.158 512 774.584 510.581 777.109 508.055C779.635 505.53 781.054 502.104 781.054 498.533V455.14H0V498.533C0 502.105 1.41885 505.53 3.94441 508.056C6.46997 510.581 9.89537 512 13.4671 512ZM781.052 57.1346V13.742C781.052 10.1704 779.633 6.74523 777.108 4.21976C774.582 1.69428 771.157 0.275307 767.585 0.274902H13.4671C9.89562 0.275711 6.47069 1.69482 3.9453 4.2202C1.41991 6.74559 0.000808841 10.1705 0 13.742L0 284.567H781.052V227.709H269.329V170.851H781.052V113.993H269.329V57.1346H781.052Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M269.329 113.993H163.094V0.276367H106.235V113.993H0V170.851H106.235V284.567H163.094V170.851H269.329V113.993Z"
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
const ForwardRef = forwardRef(SvgGr)
export default ForwardRef
