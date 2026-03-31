import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgBookmarkFilled = (
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
      d="M15.0004 3.34998C17.016 3.35019 18.6508 4.98466 18.6508 7.00037V17.7982C18.6502 19.6203 16.5246 20.6154 15.1244 19.4496L12.8646 17.5668C12.364 17.1496 11.6368 17.1496 11.1361 17.5668L8.87636 19.4496C7.47621 20.616 5.35061 19.6204 5.35 17.7982V7.00037C5.35 4.98453 6.98455 3.34998 9.00039 3.34998H15.0004Z"
      fill="currentColor"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBookmarkFilled)
export default ForwardRef
