import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgHandle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 14"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0.5 1.5C0.5 2.32843 1.17157 3 2 3C2.82843 3 3.5 2.32843 3.5 1.5C3.5 0.671573 2.82843 0 2 0C1.17157 0 0.5 0.671573 0.5 1.5ZM0.5 7C0.5 7.82843 1.17157 8.5 2 8.5C2.82843 8.5 3.5 7.82843 3.5 7C3.5 6.17157 2.82843 5.5 2 5.5C1.17157 5.5 0.5 6.17157 0.5 7ZM2 14C1.17157 14 0.5 13.3284 0.5 12.5C0.5 11.6716 1.17157 11 2 11C2.82843 11 3.5 11.6716 3.5 12.5C3.5 13.3284 2.82843 14 2 14ZM6.5 1.5C6.5 2.32843 7.17157 3 8 3C8.82843 3 9.5 2.32843 9.5 1.5C9.5 0.671573 8.82843 0 8 0C7.17157 0 6.5 0.671573 6.5 1.5ZM6.5 7C6.5 7.82843 7.17157 8.5 8 8.5C8.82843 8.5 9.5 7.82843 9.5 7C9.5 6.17157 8.82843 5.5 8 5.5C7.17157 5.5 6.5 6.17157 6.5 7ZM8 14C7.17157 14 6.5 13.3284 6.5 12.5C6.5 11.6716 7.17157 11 8 11C8.82843 11 9.5 11.6716 9.5 12.5C9.5 13.3284 8.82843 14 8 14Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHandle)
export default ForwardRef
