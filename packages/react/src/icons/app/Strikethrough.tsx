import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgStrikethrough = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 7.5V7.5C14.7014 6.60421 13.8631 6 12.9189 6H11.6056C10.6025 6 9.6658 6.5013 9.1094 7.3359V7.3359C8.4376 8.3436 8.4376 9.6564 9.1094 10.6641V10.6641C9.6658 11.4987 10.6025 12 11.6056 12H12.3944C13.3975 12 14.3342 12.5013 14.8906 13.3359V13.3359C15.5624 14.3436 15.5624 15.6564 14.8906 16.6641V16.6641C14.3342 17.4987 13.3975 18 12.3944 18H11.0811C10.1369 18 9.2986 17.3958 9 16.5V16.5"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 12H5"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgStrikethrough)
export default ForwardRef
