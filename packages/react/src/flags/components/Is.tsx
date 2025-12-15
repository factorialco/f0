import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgIs = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#41479B"
        d="M503.171 512H8.82798C6.48674 512 4.24146 510.58 2.58595 508.053C0.930439 505.526 0.000265162 502.099 0 498.526L0 13.4743C0.000265162 9.90081 0.930439 6.47381 2.58595 3.94697C4.24146 1.42014 6.48674 0.00040472 8.82798 0H503.172C505.513 0.00040472 507.759 1.42014 509.414 3.94697C511.07 6.47381 512 9.90081 512 13.4743V498.526C511.999 502.099 511.069 505.526 509.413 508.053C507.758 510.58 505.512 512 503.171 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M512 211.587H229.517V-7.5H141.241V211.587H0V299.863H141.241V523.5H229.517V299.863H512V211.587Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M512 229.242H211.862V-9H158.897V229.242H0V282.208H158.897V523.5H211.862V282.208H512V229.242Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M661.171 511.449H-92.5402C-96.1098 511.449 -99.5332 510.03 -102.057 507.506C-104.581 504.982 -106 501.559 -106 497.989V13.4598C-106 9.89015 -104.581 6.46684 -102.057 3.94273C-99.5332 1.41861 -96.1098 0.000404285 -92.5402 0H661.173C664.742 0.000404285 668.166 1.41861 670.69 3.94273C673.214 6.46684 674.632 9.89015 674.633 13.4598V497.989C674.632 501.559 673.213 504.982 670.689 507.506C668.164 510.03 664.741 511.449 661.171 511.449Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M674.631 188.429H243.938V0.00146484H109.346V188.429H-106V323.021H109.346V511.449H243.938V323.021H674.631V188.429Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M674.631 215.347H217.02V0.00146484H136.265V215.347H-106V296.103H136.265V511.449H217.02V296.103H674.631V215.347Z"
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
const ForwardRef = forwardRef(SvgIs)
export default ForwardRef
