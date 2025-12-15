import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgBarChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="366"
    height="146"
    viewBox="0 0 366 146"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g filter="url(#filter0_b_378_17717)">
      <rect y="60" width="40" height="86" rx="10" fill="#F5A51C" fillOpacity="0.1" />
    </g>
    <g filter="url(#filter1_b_378_17717)">
      <rect x="80" y="33" width="40" height="113" rx="10" fill="#F5A51C" fillOpacity="0.1" />
    </g>
    <g filter="url(#filter2_b_378_17717)">
      <rect x="162" y="60" width="40" height="86" rx="10" fill="#F5A51C" fillOpacity="0.1" />
    </g>
    <g filter="url(#filter3_b_378_17717)">
      <rect x="244" y="38" width="40" height="108" rx="10" fill="#F5A51C" fillOpacity="0.1" />
    </g>
    <g filter="url(#filter4_b_378_17717)">
      <rect x="326" width="40" height="146" rx="10" fill="#F5A51C" fillOpacity="0.1" />
    </g>
    <defs>
      <filter
        id="filter0_b_378_17717"
        x="-40"
        y="20"
        width="120"
        height="166"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_378_17717" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_378_17717"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_b_378_17717"
        x="40"
        y="-7"
        width="120"
        height="193"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_378_17717" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_378_17717"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_b_378_17717"
        x="122"
        y="20"
        width="120"
        height="166"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_378_17717" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_378_17717"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_b_378_17717"
        x="204"
        y="-2"
        width="120"
        height="188"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_378_17717" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_378_17717"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_b_378_17717"
        x="286"
        y="-40"
        width="120"
        height="226"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_378_17717" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_378_17717"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

const ForwardRef = forwardRef(SvgBarChart)
export default ForwardRef
