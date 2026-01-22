import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgCommand = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 9L11 12L8 15"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M7 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 15H16"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCommand)
export default ForwardRef
