import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMobile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M10.8 4H13.2C14.8802 4 15.7202 4 16.362 4.32698C16.9265 4.6146 17.3854 5.07354 17.673 5.63803C18 6.27976 18 7.11984 18 8.8V15.2C18 16.8802 18 17.7202 17.673 18.362C17.3854 18.9265 16.9265 19.3854 16.362 19.673C15.7202 20 14.8802 20 13.2 20H10.8C9.11984 20 8.27976 20 7.63803 19.673C7.07354 19.3854 6.6146 18.9265 6.32698 18.362C6 17.7202 6 16.8802 6 15.2V8.8C6 7.11984 6 6.27976 6.32698 5.63803C6.6146 5.07354 7.07354 4.6146 7.63803 4.32698C8.27976 4 9.11984 4 10.8 4Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      d="M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMobile)
export default ForwardRef
