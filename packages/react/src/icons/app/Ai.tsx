import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgAi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M4 13C7.31371 13 10 9.86599 10 6C10 9.86599 12.6863 13 16 13C12.6863 13 10 16.134 10 20C10 16.134 7.31371 13 4 13Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      d="M17.5001 3.35001C17.8591 3.35001 18.1501 3.64102 18.1501 4.00001C18.1501 5.02173 18.9784 5.85001 20.0001 5.85001C20.3591 5.85001 20.6501 6.14102 20.6501 6.50001C20.6501 6.85899 20.3591 7.15001 20.0001 7.15001C18.9784 7.15001 18.1501 7.97828 18.1501 9.00001C18.1501 9.35899 17.8591 9.65001 17.5001 9.65001C17.1411 9.65001 16.8501 9.35899 16.8501 9.00001C16.8501 7.97828 16.0218 7.15001 15.0001 7.15001C14.6411 7.15001 14.3501 6.85899 14.3501 6.50001C14.3501 6.14102 14.6411 5.85001 15.0001 5.85001C16.0218 5.85001 16.8501 5.02173 16.8501 4.00001C16.8501 3.64102 17.1411 3.35001 17.5001 3.35001Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAi)
export default ForwardRef
