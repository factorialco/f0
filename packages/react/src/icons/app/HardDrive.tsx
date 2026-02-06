import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgHardDrive = (
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
      stroke="currentColor"
      strokeLinejoin="round"
      d="M4 14L20 14V15.2C20 16.8802 20 17.7202 19.673 18.362C19.3854 18.9265 18.9265 19.3854 18.362 19.673C17.7202 20 16.8802 20 15.2 20H8.8C7.11984 20 6.27976 20 5.63803 19.673C5.07354 19.3854 4.6146 18.9265 4.32698 18.362C4 17.7202 4 16.8802 4 15.2V14Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M7 17H8"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M10 17H11"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M4 14L5.9319 6.27239C6.26578 4.93689 7.46573 4 8.84233 4H15.1577C16.5343 4 17.7342 4.93689 18.0681 6.27239L20 14"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHardDrive)
export default ForwardRef
