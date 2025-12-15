import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgFlask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      d="M9 9.44526V4H14.8038V9.44526C14.8038 10.4578 15.1113 11.4466 15.6855 12.2806L18.8423 16.8659C19.7558 18.1928 18.8059 20 17.1949 20H6.60892C4.99797 20 4.04806 18.1928 4.96158 16.8659L8.11836 12.2806C8.69256 11.4466 9 10.4578 9 9.44526Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M8 4L16 4"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M6.60938 14.5H17"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFlask)
export default ForwardRef
