import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgBf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FF4B55"
        d="M512 256.448H0.000488281V13.9224C0.000753443 10.349 0.930927 6.92194 2.58644 4.39511C4.24195 1.86827 6.48723 0.448525 8.82847 0.44812H503.173C505.514 0.448525 507.759 1.86827 509.415 4.39511C511.07 6.92194 512 10.349 512 13.9224V256.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#73AF00"
        d="M0.000488281 256.448H512V498.974C512 502.547 511.07 505.974 509.415 508.501C507.759 511.028 505.514 512.448 503.172 512.448H8.82849C6.48724 512.448 4.24196 511.028 2.58644 508.501C0.930929 505.974 0.000753443 502.547 0.000488281 498.974L0.000488281 256.448Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M259.166 200.276L272.268 239.439L313.68 239.76C316.889 239.785 318.219 243.866 315.639 245.766L282.325 270.291L294.817 309.653C295.785 312.702 292.302 315.225 289.692 313.364L256 289.357L222.308 313.364C219.699 315.224 216.215 312.701 217.183 309.653L229.676 270.291L196.362 245.766C193.781 243.867 195.111 239.785 198.32 239.76L239.732 239.439L252.834 200.276C253.845 197.241 258.152 197.241 259.166 200.276Z"
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
const ForwardRef = forwardRef(SvgBf)
export default ForwardRef
