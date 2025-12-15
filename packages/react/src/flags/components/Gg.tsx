import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgGg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 509" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#F5F5F5"
        d="M631.086 508.724H-118.612C-122.163 508.724 -125.568 507.313 -128.078 504.802C-130.589 502.292 -132 498.887 -132 495.336V13.3881C-132 9.83749 -130.589 6.4324 -128.078 3.92173C-125.568 1.41106 -122.163 0.000402132 -118.612 0H631.088C634.638 0.000402132 638.043 1.41106 640.554 3.92173C643.065 6.4324 644.475 9.83749 644.476 13.3881V495.336C644.475 498.887 643.064 502.292 640.553 504.802C638.042 507.313 634.637 508.724 631.086 508.724Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M644.474 200.813H309.787V0H202.686V200.813H-132V307.911H202.686V508.724H309.787V307.911H644.474V200.813Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M416.885 294.524V214.198L396.804 234.281H115.668L95.5869 214.198V294.524L115.668 274.442H396.804L416.885 294.524Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M216.074 415.012H296.398L276.317 394.929V113.794L296.398 93.7119H216.074L236.154 113.794V394.929L216.074 415.012Z"
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
const ForwardRef = forwardRef(SvgGg)
export default ForwardRef
