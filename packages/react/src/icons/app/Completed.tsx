import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCompleted = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.65001 12C4.65001 7.94068 7.94071 4.64998 12 4.64998C16.0593 4.64998 19.35 7.94068 19.35 12C19.35 16.0593 16.0593 19.35 12 19.35C7.94071 19.35 4.65001 16.0593 4.65001 12ZM12 3.34998C7.22274 3.34998 3.35001 7.22271 3.35001 12C3.35001 16.7772 7.22274 20.65 12 20.65C16.7773 20.65 20.65 16.7772 20.65 12C20.65 7.22271 16.7773 3.34998 12 3.34998ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.6863 6 6.00001 8.68629 6.00001 12C6.00001 15.3137 8.6863 18 12 18Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCompleted)
export default ForwardRef
