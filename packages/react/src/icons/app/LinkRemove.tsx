import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgLinkRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M5 5L6 6"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M9 5V4"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M5 9L4 9"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M19 19L18 18"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M15 19L15 20"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M19 15L20 15"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M12 17L11 18C9.61929 19.3807 7.38071 19.3807 6 18V18C4.61929 16.6193 4.61929 14.3807 6 13L7 12"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M12 6.99998L13 5.99999C14.3807 4.61928 16.6193 4.61929 18 6V6C19.3807 7.38071 19.3807 9.61929 18 11L17 12"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLinkRemove)
export default ForwardRef
