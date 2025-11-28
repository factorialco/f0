import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgTz = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M-135 390.526V13.467C-135 9.89545 -133.581 6.4703 -131.055 3.94484C-128.53 1.41937 -125.105 0.000404502 -121.533 0H457.521L-135 390.526Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#4173CD"
        d="M646.049 121.199V498.256C646.048 501.828 644.629 505.253 642.104 507.779C639.578 510.304 636.153 511.723 632.582 511.723H53.5283L646.049 121.199Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M646.049 128.792V13.467C646.049 9.89545 644.63 6.4703 642.104 3.94484C639.579 1.41937 636.154 0.000404502 632.582 0H449.474L-135 382.932V498.256C-135 501.828 -133.581 505.253 -131.055 507.778C-128.53 510.304 -125.105 511.723 -121.533 511.723H61.5758L646.049 128.792Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#464655"
        d="M646.049 80.503V13.467C646.049 9.89545 644.63 6.4703 642.104 3.94484C639.579 1.41937 636.154 0.000404502 632.582 0H523.177L-135 431.222V498.258C-135 501.829 -133.581 505.254 -131.055 507.78C-128.53 510.305 -125.105 511.724 -121.533 511.725H-12.1281L646.049 80.503Z"
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
const ForwardRef = forwardRef(SvgTz)
export default ForwardRef
