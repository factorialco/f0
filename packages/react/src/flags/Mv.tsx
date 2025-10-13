import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMv = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M503.171 512H8.82798C6.48674 512 4.24146 510.58 2.58595 508.053C0.930439 505.526 0.000265162 502.099 0 498.526L0 13.4743C0.000265162 9.90081 0.930439 6.47381 2.58595 3.94697C4.24146 1.42014 6.48674 0.00040472 8.82798 0H503.172C505.513 0.00040472 507.759 1.42014 509.414 3.94697C511.07 6.47381 512 9.90081 512 13.4743V498.526C511.999 502.099 511.069 505.526 509.413 508.053C507.758 510.58 505.512 512 503.171 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M441.379 158.622V352.829H70.6211V158.622H441.379Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M238.378 255.751C238.378 222.326 261.145 194.334 291.965 186.226C292.991 185.956 292.917 184.472 291.865 184.337C289.036 183.966 286.186 183.777 283.332 183.771C243.547 183.771 211.34 215.973 211.34 255.751C211.34 295.357 243.547 327.647 283.332 327.647C286.23 327.647 289.077 327.438 291.876 327.078C292.928 326.942 293.001 325.459 291.976 325.189C261.15 317.068 238.378 289.035 238.378 255.751Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M632.856 511.449H-120.856C-124.426 511.449 -127.849 510.03 -130.373 507.506C-132.897 504.982 -134.315 501.559 -134.316 497.989V13.4598C-134.315 9.89015 -132.897 6.46684 -130.373 3.94273C-127.849 1.41861 -124.426 0.000404285 -120.856 0H632.857C636.427 0.000404285 639.85 1.41861 642.374 3.94273C644.898 6.46684 646.316 9.89015 646.317 13.4598V497.989C646.316 501.559 644.898 504.982 642.373 507.506C639.849 510.03 636.425 511.449 632.856 511.449Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M538.642 107.675V403.777H-26.6418V107.675H538.642Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M229.132 255.765C229.132 204.803 263.844 162.124 310.835 149.762C312.399 149.35 312.286 147.088 310.682 146.882C306.368 146.317 302.023 146.028 297.672 146.019C237.013 146.019 187.908 195.116 187.908 255.765C187.908 316.151 237.013 365.382 297.672 365.382C302.091 365.382 306.431 365.064 310.699 364.515C312.303 364.308 312.414 362.046 310.852 361.635C263.852 349.253 229.132 306.512 229.132 255.765Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M455 512H967V569H455z"
        transform="rotate(-90 455 512)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0 512H512V569H0z"
        transform="rotate(-90 0 512)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0 0H512V57H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M57 57H455V114H57z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M512 512H1024V569H512z"
        transform="rotate(-180 512 512)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M455 455H853V512H455z"
        transform="rotate(-180 455 455)"
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
const ForwardRef = forwardRef(SvgMv)
export default ForwardRef
