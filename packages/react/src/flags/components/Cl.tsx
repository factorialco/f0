import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path fill="#F5F5F5" d="M0 0H512V512H0z" vectorEffect="non-scaling-stroke" />
      <path fill="#FF4B55" d="M0 256H512V512H0z" vectorEffect="non-scaling-stroke" />
      <path
        fill="#F5F5F5"
        d="M780.632 255.725H0V13.4598C0.000404284 9.89014 1.41861 6.46683 3.94272 3.94272C6.46683 1.41861 9.89014 0.000404284 13.4598 0H767.172C770.742 0.000404284 774.165 1.41861 776.689 3.94272C779.213 6.46683 780.631 9.89014 780.632 13.4598V255.725Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M26.918 255.725V242.265H0V497.99C0.000404284 501.56 1.41861 504.983 3.94272 507.507C6.46683 510.032 9.89014 511.45 13.4598 511.45H767.172C770.742 511.45 774.165 510.032 776.689 507.507C779.213 504.983 780.631 501.56 780.632 497.99V255.725H26.918Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M242.265 255.725H13.4598C9.89014 255.725 6.46683 254.306 3.94272 251.782C1.41861 249.258 0.000404284 245.835 0 242.265L0 13.4598C0.000404284 9.89014 1.41861 6.46683 3.94272 3.94272C6.46683 1.41861 9.89014 0.000404284 13.4598 0H242.265C245.835 0.000404284 249.258 1.41861 251.782 3.94272C254.306 6.46683 255.725 9.89014 255.725 13.4598V242.265C255.724 245.835 254.306 249.258 251.782 251.782C249.258 254.306 245.835 255.724 242.265 255.725Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M133.046 70.4582L145.877 108.932L186.433 109.246C191.684 109.285 193.862 115.988 189.637 119.106L157.012 143.197L169.244 181.866C170.827 186.873 165.128 191.012 160.856 187.96L127.862 164.378L94.8664 187.961C90.5943 191.015 84.8951 186.873 86.4777 181.867L98.7101 143.199L66.0853 119.107C61.8604 115.988 64.0376 109.287 69.2886 109.247L109.845 108.933L122.676 70.4597C124.338 65.4771 131.385 65.4771 133.046 70.4582Z"
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
const ForwardRef = forwardRef(SvgCl)
export default ForwardRef
