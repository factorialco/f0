import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgPresent = (
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
      d="M12 8L12 19"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 5.5C7 4.11929 8.11929 3 9.5 3V3C10.8807 3 12 4.11929 12 5.5V8H9.5C8.11929 8 7 6.88071 7 5.5V5.5Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 5.5C17 4.11929 15.8807 3 14.5 3V3C13.1193 3 12 4.11929 12 5.5V8H14.5C15.8807 8 17 6.88071 17 5.5V5.5Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      d="M5 12V11.35C4.64101 11.35 4.35 11.641 4.35 12H5ZM19 12H19.65C19.65 11.641 19.359 11.35 19 11.35V12ZM5 12.65H19V11.35H5V12.65ZM18.35 12V16H19.65V12H18.35ZM16 18.35H8V19.65H16V18.35ZM5.65 16V12H4.35V16H5.65ZM8 18.35C6.70213 18.35 5.65 17.2979 5.65 16H4.35C4.35 18.0158 5.98416 19.65 8 19.65V18.35ZM18.35 16C18.35 17.2979 17.2979 18.35 16 18.35V19.65C18.0158 19.65 19.65 18.0158 19.65 16H18.35Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 10.6667C4 10.0467 4 9.7367 4.06815 9.48236C4.25308 8.79218 4.79218 8.25308 5.48236 8.06815C5.7367 8 6.04669 8 6.66667 8H17.3333C17.9533 8 18.2633 8 18.5176 8.06815C19.2078 8.25308 19.7469 8.79218 19.9319 9.48236C20 9.7367 20 10.0467 20 10.6667V10.6667C20 10.9767 20 11.1317 19.9659 11.2588C19.8735 11.6039 19.6039 11.8735 19.2588 11.9659C19.1317 12 18.9767 12 18.6667 12H5.33333C5.02334 12 4.86835 12 4.74118 11.9659C4.39609 11.8735 4.12654 11.6039 4.03407 11.2588C4 11.1317 4 10.9767 4 10.6667V10.6667Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPresent)
export default ForwardRef
