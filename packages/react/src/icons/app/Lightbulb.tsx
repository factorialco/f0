import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgLightbulb = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      d="M8 16H16V17C16 18.6569 14.6569 20 13 20H11C9.34315 20 8 18.6569 8 17V16Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16V11.5M12 11.5L10.5 10.5M12 11.5L13.5 10.5"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M8 16V13.9192C8 13.6348 7.87558 13.3669 7.67824 13.162C6.63904 12.0832 6 10.6162 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 10.6162 17.361 12.0832 16.3218 13.162C16.1244 13.3669 16 13.6348 16 13.9192V16"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLightbulb)
export default ForwardRef
