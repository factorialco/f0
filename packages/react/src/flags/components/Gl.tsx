import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgGl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 509" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#F5F5F5"
        d="M714.473 254.637H-62V13.663C-61.9996 10.1124 -60.5889 6.70728 -58.0783 4.19662C-55.5676 1.68596 -52.1625 0.275304 -48.6119 0.274902H701.085C704.635 0.275304 708.04 1.68596 710.551 4.19662C713.062 6.70728 714.472 10.1124 714.473 13.663V254.637Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M-62 254.637H714.471V495.612C714.471 499.162 713.06 502.567 710.549 505.078C708.039 507.589 704.634 508.999 701.083 509H-48.6119C-52.1625 508.999 -55.5676 507.589 -58.0783 505.078C-60.5889 502.567 -61.9996 499.162 -62 495.612V254.637ZM205.749 80.5999C109.63 80.5999 31.7119 158.52 31.7119 254.637H379.785C379.785 158.52 301.868 80.5999 205.749 80.5999Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M205.749 428.675C301.868 428.675 379.786 350.755 379.786 254.638H31.7119C31.7119 350.756 109.632 428.675 205.749 428.675Z"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0H512V509H0z" vectorEffect="non-scaling-stroke" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgGl)
export default ForwardRef
