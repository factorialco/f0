import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgCd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#82AFFF"
        d="M0 0H512V512H0z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#82AFFF"
        d="M503.172 423.449H8.828C6.48675 423.449 4.24147 422.519 2.58595 420.863C0.930441 419.208 0.000265162 416.962 0 414.621L0 96.828C0.000265162 94.4868 0.930441 92.2415 2.58595 90.586C4.24147 88.9304 6.48675 88.0003 8.828 88H503.173C505.514 88.0003 507.76 88.9304 509.415 90.586C511.071 92.2415 512.001 94.4868 512.001 96.828V414.621C512 416.962 511.07 419.208 509.414 420.863C507.759 422.519 505.513 423.449 503.172 423.449Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M518.305 80.121L512.5 70L-0.000114441 335.173V352.828L523.5 82C522.026 80.897 520.288 80.121 518.305 80.121ZM-25.805 440.879H-0.5L512 176.277V158.622L-31 439C-29.526 440.103 -27.788 440.879 -25.805 440.879Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M512 88L-6.24657e-05 352.828V414.621C-6.24657e-05 417.514 -2.65 422.391 -0.5 424L512 158.622V96.8279C512 93.9349 514.15 89.61 512 88Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M92.619 122.703L105.337 160.838L145.536 161.149C147.784 161.167 148.716 164.035 146.908 165.371L114.569 189.252L126.695 227.58C127.373 229.723 124.933 231.496 123.104 230.189L90.399 206.812L57.694 230.189C55.866 231.497 53.425 229.723 54.103 227.58L66.229 189.252L33.89 165.371C32.081 164.036 33.014 161.167 35.262 161.149L75.461 160.838L88.179 122.703C88.892 120.571 91.907 120.571 92.619 122.703Z"
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
const ForwardRef = forwardRef(SvgCd)
export default ForwardRef
