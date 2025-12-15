import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#FF4B55"
        d="M-134.527 341.425H646.526V498.532C646.526 502.104 645.107 505.529 642.581 508.055C640.056 510.58 636.631 511.999 633.059 511.999H-121.06C-124.631 511.999 -128.057 510.58 -130.582 508.055C-133.107 505.529 -134.526 502.104 -134.527 498.532V341.425Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M-121.06 0.275879H633.061C636.632 0.276283 640.058 1.69526 642.583 4.22074C645.109 6.74621 646.528 10.1714 646.528 13.7429V170.851H-134.527V13.7414C-134.526 10.17 -133.107 6.74499 -130.582 4.21975C-128.056 1.69452 -124.631 0.275879 -121.06 0.275879Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M-134.527 170.845H646.526V341.413H-134.527V170.845Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M263.676 86.7452L304.002 207.66L431.46 208.649C439.236 208.71 442.459 218.63 436.206 223.249L333.671 298.967L372.118 420.493C374.463 427.907 366.023 434.038 359.698 429.518L255.999 355.399L152.302 429.518C145.976 434.039 137.537 427.907 139.882 420.493L178.329 298.967L75.7942 223.249C69.5397 218.63 72.7631 208.707 80.54 208.649L207.998 207.66L248.325 86.7452C250.782 79.3694 261.217 79.3694 263.676 86.7452Z"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0H512V512H0z" vectorEffect="non-scaling-stroke" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgMm)
export default ForwardRef
