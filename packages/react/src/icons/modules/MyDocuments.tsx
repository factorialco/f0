import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMyDocuments = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 6.54998C3 5.05881 4.20883 3.84998 5.7 3.84998H10.4571C11.8063 3.84998 12.9 4.94368 12.9 6.29283C12.9 6.43485 13.0151 6.54998 13.1571 6.54998H17.4C19.3882 6.54998 21 8.16175 21 10.15V15.55C21 17.5382 19.3882 19.15 17.4 19.15H6.6C4.61178 19.15 3 17.5382 3 15.55V6.54998ZM14.1176 10.9441C14.1176 12.1282 13.1577 13.0882 11.9735 13.0882C10.7893 13.0882 9.82939 12.1282 9.82939 10.9441C9.82939 9.75992 10.7893 8.79996 11.9735 8.79996C13.1577 8.79996 14.1176 9.75992 14.1176 10.9441ZM11.9735 13.8625C10.7704 13.8625 9.70904 14.4296 8.89159 15.0738C8.04469 15.7411 8.60843 16.8999 9.68666 16.8999H14.2604C15.3386 16.8999 15.9023 15.7411 15.0554 15.0738C14.238 14.4296 13.1766 13.8625 11.9735 13.8625Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMyDocuments)
export default ForwardRef
