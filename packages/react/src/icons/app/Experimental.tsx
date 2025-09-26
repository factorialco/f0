import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgExperimental = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      d="m 20.783178,19.090702 c 0.7416,0.865205 0.126832,2.201846 -1.012712,2.201846 H 4.2294298 c -1.139477,0 -1.7542317,-1.336641 -1.0126313,-2.201846 L 9.011285,12.330521 c 0.2071413,-0.24182 0.321049,-0.549665 0.321049,-0.868046 V 3.9810639 c 0,-1.0673002 -2.7279222,-1.0951433 2.091705,-1.0951433 h 1.109448 c 4.935599,0 2.134102,-0.032011 2.134102,1.0670509 v 7.5095035 c 0,0.318381 0.113894,0.626226 0.321102,0.868046 z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="m 6.1140418,15.710612 c 0,0 1.9619821,0.542568 2.9429732,0.542568 1.453461,0 4.171633,-1.017315 5.885946,-1.017315 0.980991,0 2.942973,0.474747 2.942973,0.474747"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx="13.20"
      cy="17.90"
      r="0.5"
      fill="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx="16.05"
      cy="19.02"
      r="0.5"
      fill="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx="8.21"
      cy="19.13"
      r="0.5"
      fill="currentColor"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgExperimental)
export default ForwardRef
