import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgLr = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M781.054 46.7963H0V13.742C0.000404503 10.1704 1.41938 6.74523 3.94485 4.21976C6.47033 1.69428 9.89549 0.275307 13.4671 0.274902H767.587C771.158 0.275307 774.584 1.69428 777.109 4.21976C779.635 6.74523 781.054 10.1704 781.054 13.742V46.7963Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 46.8022H781.052V93.3222H0V46.8022Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0 93.3115H781.052V139.831H0V93.3115Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 139.839H781.052V186.359H0V139.839Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M781.052 232.879H13.4671C9.89549 232.878 6.47033 231.459 3.94485 228.934C1.41938 226.408 0.000404503 222.983 0 219.412L0 186.359H781.052V232.879Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M781.052 279.398H0V215.739H13.464L13.4671 232.879H781.052V279.398Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0 279.402H781.052V325.922H0V279.402Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 325.911H781.052V372.431H0V325.911Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0 372.437H781.052V418.957H0V372.437Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0 418.965H781.052V465.485H0V418.965Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M767.585 512H13.4671C9.89549 512 6.47033 510.581 3.94485 508.055C1.41938 505.53 0.000404503 502.105 0 498.533L0 465.48H781.052V498.533C781.052 502.105 779.634 505.53 777.108 508.056C774.582 510.582 771.157 512 767.585 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M215.462 232.879H13.4671C9.89549 232.879 6.47033 231.46 3.94485 228.934C1.41938 226.409 0.000404503 222.984 0 219.412L0 13.742C0.000404503 10.1704 1.41938 6.74523 3.94485 4.21976C6.47033 1.69428 9.89549 0.275307 13.4671 0.274902H215.464C219.035 0.275307 222.46 1.69428 224.986 4.21976C227.511 6.74523 228.93 10.1704 228.931 13.742V219.412C228.93 222.984 227.511 226.409 224.985 228.934C222.459 231.46 219.034 232.879 215.462 232.879Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M110.616 60.474L97.7594 99.0232L57.1233 99.3375C53.2272 99.368 51.6102 104.34 54.745 106.655L87.4348 130.796L75.1775 169.541C74.0029 173.255 78.2331 176.329 81.403 174.064L114.467 150.434L147.527 174.064C150.697 176.329 154.927 173.255 153.753 169.541L141.495 130.796L174.185 106.655C177.32 104.341 175.703 99.3665 171.807 99.3375L131.171 99.0232L118.314 60.474C117.078 56.7762 111.85 56.7762 110.616 60.474Z"
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
const ForwardRef = forwardRef(SvgLr)
export default ForwardRef
