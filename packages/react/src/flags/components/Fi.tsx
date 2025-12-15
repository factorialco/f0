import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgFi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 509" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#F5F5F5"
        d="M663.288 509H-86.8145C-90.367 509 -93.7739 507.588 -96.286 505.076C-98.798 502.564 -100.209 499.157 -100.21 495.605V13.3953C-100.209 9.8428 -98.798 6.43587 -96.286 3.92385C-93.7739 1.41182 -90.367 0.000402349 -86.8145 0H663.289C666.842 0.000402349 670.249 1.41182 672.761 3.92385C675.273 6.43587 676.684 9.8428 676.685 13.3953V495.605C676.684 499.157 675.272 502.564 672.76 505.076C670.248 507.588 666.841 509 663.288 509Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M676.683 214.316H221.263V0.00146484H140.896V214.316H-100.21V294.685H140.896V509H221.263V294.685H676.683V214.316Z"
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
const ForwardRef = forwardRef(SvgFi)
export default ForwardRef
