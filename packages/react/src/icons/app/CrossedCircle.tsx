import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCrossedCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.35001 12C3.35001 7.22273 7.22274 3.35 12 3.35C16.7773 3.35 20.65 7.22273 20.65 12C20.65 16.7773 16.7773 20.65 12 20.65C7.22274 20.65 3.35001 16.7773 3.35001 12ZM9.45963 8.54038C9.20578 8.28654 8.79423 8.28654 8.54039 8.54038C8.28655 8.79422 8.28655 9.20578 8.54039 9.45962L11.0808 12L8.54039 14.5404C8.28655 14.7942 8.28655 15.2058 8.54039 15.4596C8.79423 15.7135 9.20578 15.7135 9.45963 15.4596L12 12.9192L14.5404 15.4596C14.7942 15.7135 15.2058 15.7135 15.4596 15.4596C15.7135 15.2058 15.7135 14.7942 15.4596 14.5404L12.9192 12L15.4596 9.45962C15.7135 9.20578 15.7135 8.79422 15.4596 8.54038C15.2058 8.28654 14.7942 8.28654 14.5404 8.54038L12 11.0808L9.45963 8.54038Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCrossedCircle)
export default ForwardRef
