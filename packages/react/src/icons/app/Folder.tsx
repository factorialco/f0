import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgFolder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      d="M11.4375 6C11.09 5.38228 10.4364 5 9.72763 5H7.19998C6.07987 5 5.51982 5 5.092 5.21799C4.71567 5.40973 4.40971 5.71569 4.21796 6.09202C3.99998 6.51984 3.99998 7.07989 3.99998 8.2V14.2C3.99998 15.8802 3.99998 16.7202 4.32696 17.362C4.61458 17.9265 5.07352 18.3854 5.63801 18.673C6.27974 19 7.11982 19 8.79998 19H15.2C16.8801 19 17.7202 19 18.3619 18.673C18.9264 18.3854 19.3854 17.9265 19.673 17.362C20 16.7202 20 15.8802 20 14.2V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9264 7.6146 18.3619 7.32698C17.7202 7 16.8801 7 15.2 7H13.1473C12.4386 7 11.7849 6.61772 11.4375 6V6Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFolder)
export default ForwardRef
