import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.8787 4.87868L17.1213 7.12132C17.684 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9.00002C7.34317 20 6.00002 18.6569 6.00002 17V7C6.00002 5.34315 7.34317 4 9.00002 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFile)
export default ForwardRef
