import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgInbox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M20 15V10.7146C20 10.2525 19.84 9.80468 19.5471 9.44721L17.6236 7.09895C17.0538 6.40334 16.202 6.00001 15.3028 6.00001H8.31014C7.31744 6.00001 6.38901 6.49108 5.83033 7.31164L4.34677 9.49064C4.12081 9.82252 3.99997 10.2147 3.99997 10.6162V15C3.99997 16.6569 5.34312 18 6.99997 18H17C18.6568 18 20 16.6569 20 15Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.49998 10H7.65285C8.14169 10 8.55888 10.3534 8.63924 10.8356L8.86071 12.1644C8.94107 12.6466 9.35827 13 9.8471 13H14.1529C14.6417 13 15.0589 12.6466 15.1392 12.1644L15.3607 10.8356C15.4411 10.3534 15.8583 10 16.3471 10H19.5"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgInbox)
export default ForwardRef
