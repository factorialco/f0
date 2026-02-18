import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgPauseCircle = (
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
      fillRule="evenodd"
      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10 8.35C10.359 8.35 10.65 8.64101 10.65 9V15C10.65 15.359 10.359 15.65 10 15.65C9.64102 15.65 9.35001 15.359 9.35001 15V9C9.35001 8.64101 9.64102 8.35 10 8.35ZM14.65 9C14.65 8.64101 14.359 8.35 14 8.35C13.641 8.35 13.35 8.64101 13.35 9V15C13.35 15.359 13.641 15.65 14 15.65C14.359 15.65 14.65 15.359 14.65 15V9Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPauseCircle)
export default ForwardRef
