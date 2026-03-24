import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgProgressClock = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.54199 1.08398C12.6611 1.08398 16 4.42287 16 8.54199C16 12.6611 12.6611 16 8.54199 16C4.42287 16 1.08398 12.6611 1.08398 8.54199C1.08398 4.42287 4.42287 1.08398 8.54199 1.08398ZM8.54199 17.084C13.2594 17.084 17.084 13.2594 17.084 8.54199C17.084 3.82456 13.2594 0 8.54199 0C3.82456 0 0 3.82456 0 8.54199C0 13.2594 3.82456 17.084 8.54199 17.084ZM14.542 8.54202C14.542 11.8557 11.8557 14.542 8.54199 14.542C3.74199 14.542 2.54199 10.542 2.54199 8.54202H8.54199V2.54202C11.8557 2.54202 14.542 5.22831 14.542 8.54202Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgProgressClock)
export default ForwardRef
