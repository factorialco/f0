import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgRocket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11 14.9999L9 12.9999M11 14.9999C12.0745 14.5913 13.413 14.0759 14.3846 13.4615M11 14.9999V18.9999C11 18.9999 14.2538 18.1153 15 16.9999C15.8308 15.7538 14.3846 13.4615 14.3846 13.4615M9 12.9999C9.40934 11.938 9.92477 10.6124 10.5385 9.6539M9 12.9999H5C5 12.9999 5.88462 9.74607 7 8.99993C8.24615 8.16917 10.5385 9.6539 10.5385 9.6539M10.5385 9.6539C12.5 6.50003 14.5 5.00003 19 5.00003C19 8.50003 18 11.5 14.3846 13.4615"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M4.66921 17.526C4.74318 16.6629 5.46533 16 6.33156 16V16C7.25301 16 8 16.747 8 17.6684V17.6684C8 18.5347 7.3371 19.2568 6.47404 19.3308L4.5 19.5L4.66921 17.526Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRocket)
export default ForwardRef
