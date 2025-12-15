import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgProjects = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6H17C19.2091 6 21 7.79086 21 10V16C21 18.2091 19.2091 20 17 20H7C4.79086 20 3 18.2091 3 16V10C3 7.79086 4.79086 6 7 6H8ZM5 13V16C5 17.1046 5.89543 18 7 18H17C18.1046 18 19 17.1046 19 16V13H14V13.75C14 14.4404 13.4404 15 12.75 15H11.25C10.5596 15 10 14.4404 10 13.75V13H5ZM10 6H14C14 5.44772 13.5523 5 13 5H11C10.4477 5 10 5.44772 10 6ZM12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgProjects)
export default ForwardRef
