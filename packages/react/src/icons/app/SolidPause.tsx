import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgSolidPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M5.99999 17V6.99999C5.99999 5.89542 6.89542 4.99999 7.99999 4.99999C9.10456 4.99999 9.99999 5.89542 9.99999 6.99999V17C9.99999 18.1046 9.10456 19 7.99999 19C6.89542 19 5.99999 18.1046 5.99999 17Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      d="M14 17V6.99999C14 5.89542 14.8954 4.99999 16 4.99999C17.1046 4.99999 18 5.89542 18 6.99999V17C18 18.1046 17.1046 19 16 19C14.8954 19 14 18.1046 14 17Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSolidPause)
export default ForwardRef
