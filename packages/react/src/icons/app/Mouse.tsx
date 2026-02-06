import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgMouse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 7V9.5"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M6.19249 16.071C6.34438 17.9842 7.85934 19.6088 9.81202 19.8494C10.5301 19.9378 11.2602 20 12 20C12.7398 20 13.4698 19.9378 14.1879 19.8494C16.1406 19.6088 17.6555 17.9842 17.8074 16.071C17.9127 14.7454 18 13.3856 18 12C18 10.6144 17.9127 9.25466 17.8074 7.92894C17.6555 6.01572 16.1406 4.39114 14.1879 4.15056C13.4698 4.0621 12.7398 4 12 4C11.2602 4 10.5301 4.0621 9.81202 4.15056C7.85934 4.39114 6.34438 6.01572 6.19249 7.92894C6.08722 9.25466 6 10.6144 6 12C6 13.3856 6.08722 14.7454 6.19249 16.071Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMouse)
export default ForwardRef
