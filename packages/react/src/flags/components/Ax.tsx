import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgAx = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path fill="#4173CD" d="M0 0H512V512H0z" vectorEffect="non-scaling-stroke" />
      <path fill="#4173CD" d="M512 0H0V512H512V0Z" vectorEffect="non-scaling-stroke" />
      <path
        fill="#4173CD"
        d="M503.672 423.724H9.328C4.453 423.724 0.5 419.771 0.5 414.896V97.1039C0.5 92.2289 4.453 88.2759 9.328 88.2759H503.673C508.548 88.2759 512.501 92.2289 512.501 97.1039V414.896C512.5 419.772 508.547 423.724 503.672 423.724Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M512.5 211.862H230.017V-6.5H141.741V211.862H0.5V300.138H141.741V513H230.017V300.138H512.5V211.862Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M512.5 238.345H203.534V-3.5H168.224V238.345H0.5V273.655H168.224V511H203.534V273.655H512.5V238.345Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#4173CD"
        d="M683.172 511.448H-70.5402C-77.973 511.448 -84 505.421 -84 497.988V13.4598C-84 6.02701 -77.973 0 -70.5402 0H683.173C690.606 0 696.633 6.02701 696.633 13.4598V497.988C696.632 505.423 690.605 511.448 683.172 511.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M696.632 188.428H265.938V0H131.346V188.428H-84V323.02H131.346V511.448H265.938V323.02H696.632V188.428Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M696.632 228.806H225.56V0H171.724V228.806H-84V282.642H171.724V511.448H225.56V282.642H696.632V228.806Z"
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
const ForwardRef = forwardRef(SvgAx)
export default ForwardRef
