import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.65 5.00001C12.65 4.64102 12.359 4.35001 12 4.35001C11.641 4.35001 11.35 4.64102 11.35 5.00001V11.35H5C4.64102 11.35 4.35 11.641 4.35 12C4.35 12.359 4.64102 12.65 5 12.65H11.35V19C11.35 19.359 11.641 19.65 12 19.65C12.359 19.65 12.65 19.359 12.65 19V12.65H19C19.359 12.65 19.65 12.359 19.65 12C19.65 11.641 19.359 11.35 19 11.35H12.65V5.00001Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPlus)
export default ForwardRef
