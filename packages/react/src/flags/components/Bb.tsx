import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgBb = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M512 0H0V512H512V0Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M170.667 423.724H8.828C6.48675 423.724 4.24147 422.794 2.58595 421.138C0.930441 419.483 0.000265162 417.237 0 414.896L0 97.104C0.000265162 94.7627 0.930441 92.5175 2.58595 90.862C4.24147 89.2064 6.48675 88.2763 8.828 88.276H170.667V423.724Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M171 0H341V512H171V0Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#41479B"
        d="M503.172 423.724H341.333V88.276H503.172C505.513 88.2763 507.759 89.2064 509.414 90.862C511.07 92.5175 512 94.7627 512 97.104V414.896C512 417.237 511.07 419.483 509.414 421.138C507.759 422.794 505.513 423.724 503.172 423.724Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#464655"
        d="M326.62 207.256C326.62 207.256 302.056 207.256 283.633 225.679H295.914C295.914 225.679 284.016 247.172 277.875 284.018L265.21 281.95V225.496L277.491 229.517L255.999 176.552L234.506 229.517L246.787 225.422V281.949L234.122 284.017C227.981 247.172 216.083 225.678 216.083 225.678H228.364C209.942 207.256 185.378 207.256 185.378 207.256C216.082 244.101 216.082 305.511 216.082 305.511L246.786 300.394V342.357H265.209V300.394L295.913 305.511C295.915 305.512 295.915 244.103 326.62 207.256Z"
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
const ForwardRef = forwardRef(SvgBb)
export default ForwardRef
