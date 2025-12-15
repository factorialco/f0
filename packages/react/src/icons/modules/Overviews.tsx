import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgOverviews = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M11 12.2C11 12.6418 11.3582 13 11.8 13H17C17.5523 13 18.0075 13.4503 17.9295 13.997C17.4456 17.3908 14.5275 20 11 20C7.13401 20 4 16.866 4 13C4 9.4725 6.60923 6.55442 10.003 6.07046C10.5497 5.9925 11 6.44772 11 7V12.2Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      d="M14 4C14 3.44772 14.4503 2.9925 14.997 3.07046C18.0651 3.50798 20.492 5.93488 20.9295 9.00297C21.0075 9.54972 20.5523 10 20 10H14.5C14.2239 10 14 9.77614 14 9.5V4Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgOverviews)
export default ForwardRef
