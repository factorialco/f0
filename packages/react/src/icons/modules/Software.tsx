import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgSoftware = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M3 7.49999C3 5.51177 4.61178 3.89999 6.6 3.89999H17.4C19.3882 3.89999 21 5.51177 21 7.49999V12.9C21 14.8882 19.3882 16.5 17.4 16.5H15.6V18.3H16.5C16.9971 18.3 17.4 18.7029 17.4 19.2C17.4 19.697 16.9971 20.1 16.5 20.1H7.5C7.00294 20.1 6.6 19.697 6.6 19.2C6.6 18.7029 7.00294 18.3 7.5 18.3H8.4V16.5H6.6C4.61177 16.5 3 14.8882 3 12.9V7.49999ZM6.6 14.7H17.4C18.3941 14.7 19.2 13.8941 19.2 12.9V7.49999C19.2 6.50588 18.3941 5.69999 17.4 5.69999H6.6C5.60589 5.69999 4.8 6.50588 4.8 7.49999V12.9C4.8 13.8941 5.60589 14.7 6.6 14.7Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSoftware)
export default ForwardRef
