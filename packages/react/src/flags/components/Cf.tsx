import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#FFE15A"
        d="M503.172 512.276H8.82849C6.48724 512.275 4.24196 510.856 2.58644 508.329C0.930929 505.802 0.000753443 502.375 0.000488281 498.802L0.000488281 384.276H512V498.802C512 502.375 511.07 505.802 509.415 508.329C507.759 510.856 505.514 512.276 503.172 512.276Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M0.000488281 256.276H512V384.276H0.000488281V256.276Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0.000488281 128.276H512V256.276H0.000488281V128.276Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M512 128.276H0.000488281V13.7503C0.000753443 10.1768 0.930927 6.74983 2.58644 4.22299C4.24195 1.69615 6.48723 0.276406 8.82847 0.276001H503.173C505.514 0.276406 507.759 1.69615 509.415 4.22299C511.07 6.74983 512 10.1768 512 13.7503V128.276Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M214 0.276001H298V512.276H214V0.276001Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M76.7064 24.589L85.8349 51.9366L114.688 52.1607C116.923 52.178 117.849 55.0283 116.051 56.3556L92.8393 73.4795L101.541 100.965C102.216 103.093 99.7891 104.856 97.9711 103.556L74.498 86.7936L51.0249 103.556C49.2056 104.855 46.7803 103.093 47.4545 100.965L56.1567 73.4795L32.9488 56.3556C31.1506 55.0295 32.0776 52.1792 34.312 52.1607L63.1648 51.9366L72.2933 24.589C72.9997 22.4705 75.9987 22.4705 76.7064 24.589Z"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0H512V512H0z" vectorEffect="non-scaling-stroke" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgCf)
export default ForwardRef
