import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgSe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#4173CD"
        d="M503.171 512H8.82798C6.48674 512 4.24146 510.58 2.58595 508.053C0.930439 505.526 0.000265162 502.099 0 498.526L0 13.4743C0.000265162 9.90081 0.930439 6.47381 2.58595 3.94697C4.24146 1.42014 6.48674 0.00040472 8.82798 0H503.172C505.513 0.00040472 507.759 1.42014 509.414 3.94697C511.07 6.47381 512 9.90081 512 13.4743V498.526C511.999 502.099 511.069 505.526 509.413 508.053C507.758 510.58 505.512 512 503.171 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M512 229.242H211.862V-26H158.897V229.242H0V282.208H158.897V527H211.862V282.208H512V229.242Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#4173CD"
        d="M669.585 512H-84.533C-88.1045 512 -91.5297 510.581 -94.0551 508.055C-96.5806 505.53 -97.9996 502.104 -98 498.533V13.7424C-97.9996 10.1709 -96.5806 6.74571 -94.0551 4.22024C-91.5297 1.69477 -88.1045 0.275795 -84.533 0.275391H669.586C673.158 0.275795 676.583 1.69477 679.108 4.22024C681.634 6.74571 683.053 10.1709 683.053 13.7424V498.533C683.052 502.105 681.633 505.53 679.107 508.055C676.582 510.581 673.156 512 669.585 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M683.052 215.739H225.194V0.276855H144.396V215.739H-98V296.538H144.396V512H225.194V296.538H683.052V215.739Z"
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
const ForwardRef = forwardRef(SvgSe)
export default ForwardRef
