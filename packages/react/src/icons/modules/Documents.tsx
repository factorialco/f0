import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgDocuments = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M5.7 3.85001C4.20883 3.85001 3 5.05884 3 6.55001V15.55C3 17.5382 4.61178 19.15 6.6 19.15H17.4C19.3882 19.15 21 17.5382 21 15.55V10.15C21 8.16178 19.3882 6.55001 17.4 6.55001H13.1571C13.0151 6.55001 12.9 6.43488 12.9 6.29286C12.9 4.94371 11.8063 3.85001 10.4571 3.85001H5.7Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDocuments)
export default ForwardRef
