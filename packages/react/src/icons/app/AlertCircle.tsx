import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgAlertCircle = (
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
      fill="currentColor"
      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0325 8.05964C10.9888 7.49582 11.4345 7.01416 12 7.01416C12.5655 7.01416 13.0112 7.49582 12.9675 8.05964L12.6647 11.9598C12.6377 12.3069 12.3482 12.5748 12 12.5748C11.6518 12.5748 11.3623 12.3069 11.3353 11.9598L11.0325 8.05964ZM13 15.001C13 15.5533 12.5523 16.001 12 16.001C11.4477 16.001 11 15.5533 11 15.001C11 14.4487 11.4477 14.001 12 14.001C12.5523 14.001 13 14.4487 13 15.001Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAlertCircle)
export default ForwardRef
