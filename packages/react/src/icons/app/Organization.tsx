import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgOrganization = (
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
    <circle
      cx={12}
      cy={6}
      r={2}
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={12}
      cy={18}
      r={2}
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={4}
      cy={18}
      r={2}
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      cx={20}
      cy={18}
      r={2}
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16V15.5C4 13.2909 5.79086 11.5 8 11.5H16C18.2091 11.5 20 13.2909 20 15.5V16"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8V16"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgOrganization)
export default ForwardRef
