import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#73AF00"
        d="M0 0H512V512H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M0 413H512V512H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M600.242 -1.50024H459L-96 512.5C-94.411 514.039 -92.263 515.006 -89.876 515.006H51.365L606.367 1.00576C604.778 -0.534244 602.629 -1.50024 600.242 -1.50024Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M459 -1.50024L8.82804 88.0004C6.48688 88.0004 4.2416 88.9304 2.58606 90.5857C0.930513 92.2411 0.00030607 94.4863 4.08888e-05 96.8274V414.621C4.08888e-05 417.109 -1.65613 422.396 -0.000127673 424.001L459 -1.50024Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M513 87.4998L150.069 423.448H503.172C505.513 423.448 507.759 422.518 509.414 420.862C511.07 419.207 512 416.961 512 414.62V96.8271C512 94.3381 514.656 89.1038 513 87.4998Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M634.329 -1H418.141L-131.706 508.612C-129.273 510.968 -125.986 512.448 -122.332 512.448H93.8562L643.704 2.83577C641.272 0.478592 637.983 -1 634.329 -1Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M418.141 -1H-122.33C-125.914 -1 -129.351 0.423417 -131.885 2.95716C-134.419 5.4909 -135.842 8.92745 -135.843 12.5109V498.935C-135.843 502.744 -134.24 506.155 -131.705 508.612L418.141 -1Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M643.705 2.83594L93.8582 512.448H634.329C637.913 512.448 641.35 511.024 643.884 508.49C646.418 505.956 647.841 502.519 647.842 498.936V12.5111C647.842 8.70132 646.239 5.29107 643.705 2.83594Z"
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
const ForwardRef = forwardRef(SvgCg)
export default ForwardRef
