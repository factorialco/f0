import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#41479B"
        d="M0 0H512V512H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M512 102.848H0.000488281V13.9222C0.000753443 10.3487 0.930927 6.9217 2.58644 4.39486C4.24195 1.86802 6.48723 0.448281 8.82847 0.447876H503.173C505.514 0.448281 507.759 1.86802 509.415 4.39486C511.07 6.9217 512 10.3487 512 13.9222V102.848ZM503.172 512.448H8.82847C6.48723 512.447 4.24195 511.028 2.58644 508.501C0.930927 505.974 0.000753443 502.547 0.000488281 498.974L0.000488281 410.047H512V498.974C512 502.547 511.069 505.974 509.414 508.501C507.758 511.028 505.513 512.448 503.172 512.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0.000488281 103.448H512V205.448H0.000488281V103.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M0.000488281 205.448H512V308.448H0.000488281V205.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M0.000488281 308.448H512V410.448H0.000488281V308.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M760.476 102.401H-21V13.4743C-20.9996 9.90084 -19.5799 6.47382 -17.053 3.94699C-14.5262 1.42015 -11.0992 0.000404722 -7.52567 0H747.002C750.575 0.000404722 754.002 1.42015 756.529 3.94699C759.056 6.47382 760.475 9.90084 760.476 13.4743V102.401ZM747 512H-7.52567C-11.0992 512 -14.5262 510.58 -17.053 508.053C-19.5799 505.526 -20.9996 502.099 -21 498.526V409.599H760.474V498.526C760.474 502.099 759.055 505.527 756.528 508.053C754.001 510.58 750.574 512 747 512Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-21 102.401H760.473V204.801H-21V102.401Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M-21 204.8H760.473V307.199H-21V204.8Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M-21 307.2H760.473V409.6H-21V307.2Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M-15.9479 508.799L373.877 261.911C378.213 259.164 378.213 252.837 373.877 250.09L-15.9479 3.20056C-18.9624 5.67167 -21 9.27225 -21 13.4742V498.526C-21 502.728 -18.9608 506.328 -15.9479 508.799Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#F5F5F5"
        d="M114.119 191.041L127.953 232.521L171.677 232.859C175.064 232.887 176.469 237.208 173.744 239.221L138.57 265.196L151.759 306.884C152.782 310.114 149.103 312.785 146.348 310.815L110.776 285.389L75.2036 310.816C72.4486 312.787 68.7701 310.114 69.7928 306.886L82.9817 265.199L47.8062 239.224C45.0817 237.211 46.4859 232.888 49.8728 232.862L93.5972 232.524L107.432 191.044C108.502 187.828 113.047 187.828 114.119 191.041Z"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          d="M0 0H512V512H0z"
          vectorEffect="non-scaling-stroke"
        />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgCu)
export default ForwardRef
