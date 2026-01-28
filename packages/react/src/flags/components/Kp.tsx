import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgKp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#41479B"
        d="M691.585 512H-62.5329C-66.1045 512 -69.5297 510.581 -72.0551 508.055C-74.5806 505.53 -75.9996 502.104 -76 498.533V13.742C-75.9996 10.1704 -74.5806 6.74523 -72.0551 4.21976C-69.5297 1.69428 -66.1045 0.275307 -62.5329 0.274902H691.587C695.158 0.275307 698.584 1.69428 701.109 4.21976C703.635 6.74523 705.054 10.1704 705.054 13.742V498.533C705.053 502.105 703.634 505.53 701.108 508.055C698.582 510.581 695.157 512 691.585 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-76 67.6089H705.052V94.5415H-76V67.6089ZM-76 417.735H705.052V444.668H-76V417.735Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M-76 94.541H705.052V417.735H-76V94.541Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M139.462 363.87C198.961 363.87 247.194 315.637 247.194 256.138C247.194 196.639 198.961 148.406 139.462 148.406C79.9635 148.406 31.7303 196.639 31.7303 256.138C31.7303 315.637 79.9635 363.87 139.462 363.87Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M142.332 158.057L163.943 222.857L232.25 223.388C235.156 223.409 236.361 227.117 234.023 228.844L179.073 269.422L199.676 334.549C200.554 337.319 197.399 339.61 195.034 337.922L139.464 298.199L83.8915 337.92C81.5285 339.61 78.3738 337.318 79.2494 334.547L99.8528 269.421L44.903 228.843C42.5644 227.117 43.7695 223.409 46.6756 223.386L114.983 222.855L136.594 158.055C137.514 155.3 141.412 155.3 142.332 158.057Z"
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
const ForwardRef = forwardRef(SvgKp)
export default ForwardRef
