import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgKw = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M780.633 170.484H0V13.4598C0.000404285 9.89015 1.41861 6.46684 3.94273 3.94273C6.46684 1.41861 9.89015 0.000404285 13.4598 0H767.173C770.742 0.000404285 774.166 1.41861 776.69 3.94273C779.214 6.46684 780.632 9.89015 780.633 13.4598V170.484Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M767.171 511.449H13.4598C9.89015 511.448 6.46684 510.03 3.94273 507.506C1.41861 504.982 0.000404285 501.559 0 497.989L0 340.966H780.631V497.989C780.631 501.559 779.213 504.982 776.689 507.507C774.164 510.031 770.741 511.449 767.171 511.449Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 170.478H780.631V340.954H0V170.478Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#464655"
        d="M4.96433 508.195L215.346 341.195L215.341 170.249L4.96433 3.25488C1.99884 5.72332 0 9.3002 0 13.4595V497.989C0 502.15 1.99884 505.727 4.96433 508.195Z"
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
const ForwardRef = forwardRef(SvgKw)
export default ForwardRef
