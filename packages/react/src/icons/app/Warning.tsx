import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgWarning = (
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
      fillRule="evenodd"
      d="M5.39903 19C3.87406 19 2.91012 17.3618 3.65071 16.0287L10.2517 4.14697C11.0137 2.77535 12.9863 2.77535 13.7483 4.14697L20.3493 16.0287C21.0899 17.3618 20.1259 19 18.601 19H5.39903ZM12 7.5C11.4345 7.5 10.9888 7.98166 11.0325 8.54549L11.3353 12.4456C11.3623 12.7927 11.6518 13.0607 12 13.0607C12.3482 13.0607 12.6377 12.7927 12.6647 12.4456L12.9675 8.54549C13.0112 7.98166 12.5655 7.5 12 7.5ZM12 16.4869C12.5523 16.4869 13 16.0391 13 15.4869C13 14.9346 12.5523 14.4869 12 14.4869C11.4477 14.4869 11 14.9346 11 15.4869C11 16.0391 11.4477 16.4869 12 16.4869Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWarning)
export default ForwardRef
