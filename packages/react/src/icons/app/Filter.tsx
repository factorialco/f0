import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      d="M5.41496 6.65079C4.85896 6.00212 5.31987 5 6.17422 5H17.8258C18.6801 5 19.141 6.00212 18.585 6.65079L14.2407 11.7191C14.0854 11.9004 14 12.1312 14 12.3699V16.5C14 16.8148 13.8518 17.1111 13.6 17.3L11.6 18.8C10.9408 19.2944 10 18.824 10 18V12.3699C10 12.1312 9.91461 11.9004 9.75926 11.7191L5.41496 6.65079Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFilter)
export default ForwardRef
