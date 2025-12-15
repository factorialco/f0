import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgBuilding = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.52922 6.63982L10.5292 3.82732C11.4425 3.31362 12.5575 3.31362 13.4708 3.82732L18.4708 6.63982C19.4154 7.17117 20 8.17072 20 9.25454V14.7455C20 15.8293 19.4154 16.8288 18.4708 17.3602L13.4708 20.1727C12.5575 20.6864 11.4425 20.6864 10.5292 20.1727L5.52922 17.3602C4.58459 16.8288 4 15.8293 4 14.7455V9.25454C4 8.17072 4.58459 7.17117 5.52922 6.63982Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 8L12 12M12 20V12M19 8L12 12"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      d="M15 15.0662V18.2338C15 19.0111 15.848 19.4912 16.5145 19.0913L17.0145 18.7913C17.3157 18.6106 17.5 18.2851 17.5 17.9338V13.8831C17.5 13.4944 17.076 13.2544 16.7428 13.4543L15.4855 14.2087C15.1843 14.3894 15 14.7149 15 15.0662Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBuilding)
export default ForwardRef
