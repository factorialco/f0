import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgReset = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13.5C5 14.8845 5.41054 16.2378 6.17971 17.389C6.94888 18.5401 8.04213 19.4373 9.32122 19.9672C10.6003 20.497 12.0078 20.6356 13.3656 20.3655C14.7235 20.0954 15.9708 19.4287 16.9497 18.4497C17.9287 17.4708 18.5954 16.2235 18.8655 14.8656C19.1356 13.5078 18.997 12.1003 18.4672 10.8212C17.9373 9.54213 17.0401 8.44888 15.889 7.67971C14.7378 6.91054 13.3845 6.5 12 6.5L5.5 6.5"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 3.5L5 6.5L8 9.5"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgReset)
export default ForwardRef
