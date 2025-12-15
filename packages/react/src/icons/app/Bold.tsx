import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      d="M12.5 11.5C14.1569 11.5 15.5 10.1569 15.5 8.5C15.5 6.84315 14.1569 5.5 12.5 5.5L9 5.5C7.89543 5.5 7 6.39543 7 7.5L7 16.5C7 17.6046 7.89543 18.5 9 18.5H15"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M14.8333 18.5C16.8584 18.5 18.5 16.933 18.5 15C18.5 13.067 16.8584 11.5 14.8333 11.5H7.5"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBold)
export default ForwardRef
