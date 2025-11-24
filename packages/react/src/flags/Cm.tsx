import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M159.547 558.896H-24.6201C-27.2843 558.896 -29.8394 557.204 -31.7233 554.194C-33.6072 551.184 -34.6657 547.102 -34.666 542.845V-34.9493C-34.6657 -39.2061 -33.6072 -43.2884 -31.7233 -46.2983C-29.8394 -49.3083 -27.2843 -50.9995 -24.6201 -51H159.547V558.896Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FF4B55"
        d="M159.546 -51H352.623V558.896H159.546V-51Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M536.713 446.457H352.905V65.4731H536.713C539.372 65.4734 541.922 66.5299 543.802 68.4101C545.682 70.2904 546.739 72.8404 546.739 75.4995V436.431C546.739 439.09 545.683 441.64 543.803 443.52C541.922 445.401 539.372 446.457 536.713 446.457ZM258.07 219.217L266.683 245.045L293.908 245.255C296.017 245.271 296.892 247.964 295.195 249.217L273.293 265.39L281.506 291.348C282.143 293.36 279.853 295.022 278.136 293.796L255.987 277.965L233.838 293.797C232.121 295.023 229.832 293.36 230.468 291.349L238.68 265.391L216.779 249.218C215.082 247.965 215.956 245.272 218.065 245.256L245.29 245.046L253.904 219.218C254.573 217.217 257.402 217.217 258.07 219.217Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        fill="#FFE15A"
        d="M536.79 558.896H352.624V-51H536.79C539.455 -50.9995 542.01 -49.3083 543.893 -46.2983C545.777 -43.2884 546.836 -39.2061 546.836 -34.9493V542.845C546.836 547.102 545.778 551.185 543.894 554.195C542.01 557.205 539.455 558.896 536.79 558.896Z"
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
const ForwardRef = forwardRef(SvgCm)
export default ForwardRef
