import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgBell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M9.76367 18C10.313 18.6137 11.1113 19 11.9998 19C12.8883 19 13.6866 18.6137 14.2359 18"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M12 4C9.23858 4 7 6.23858 7 9V9.72607C7 9.90146 6.93033 10.0697 6.8063 10.1937L6.03225 10.9678C5.39962 11.6004 5.17871 12.5361 5.46164 13.3849C5.78314 14.3494 6.68577 15 7.70246 15H16.2975C17.3142 15 18.2169 14.3494 18.5384 13.3849C18.8213 12.5361 18.6004 11.6004 17.9678 10.9678L17.1937 10.1937C17.0697 10.0697 17 9.90146 17 9.72607V9C17 6.23858 14.7614 4 12 4Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBell)
export default ForwardRef
