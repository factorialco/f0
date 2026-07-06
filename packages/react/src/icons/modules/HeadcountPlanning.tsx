import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgHeadcountPlanning = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    ref={ref}
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="currentColor"
        d="M21.0703 13.6004C21.5397 13.6004 21.9209 13.9815 21.9209 14.451V17.451C21.9207 17.9202 21.5396 18.3015 21.0703 18.3016C20.601 18.3015 20.2199 17.9202 20.2197 17.451V16.5047L18.0254 18.699C17.4982 19.2259 16.6423 19.2259 16.1152 18.699L14.0703 16.6541L10.6719 20.0525C10.3399 20.3842 9.80061 20.3842 9.46874 20.0525C9.13688 19.7207 9.13706 19.1814 9.46874 18.8494L13.1152 15.2029C13.6096 14.7086 14.3917 14.6789 14.9219 15.1111L14.9287 15.117L15.0254 15.2029L17.0703 17.2478L19.0166 15.3016H18.0703C17.601 15.3015 17.2199 14.9202 17.2197 14.451C17.2197 13.9816 17.6009 13.6005 18.0703 13.6004H21.0703ZM9.34178 13.5164C10.2591 13.5164 11.1271 13.7136 11.9297 14.0301L8.36718 17.5936C8.12468 17.836 7.75214 18.1969 7.37792 18.5975H4.46092C3.10839 18.5972 2.38897 17.1448 3.38378 16.2283C4.82186 14.9037 6.90837 13.5164 9.34178 13.5164ZM15.6992 5.44218C17.5787 5.44218 19.1025 6.966 19.1025 8.8455C19.1025 10.725 17.5787 12.2488 15.6992 12.2488C14.8837 12.2487 14.1349 11.9616 13.5488 11.4832C14.3279 10.5401 14.7958 9.33032 14.7959 8.01152C14.7958 7.20173 14.6174 6.434 14.3008 5.74297C14.7274 5.55034 15.2007 5.44225 15.6992 5.44218ZM9.34178 4.2C11.4465 4.2 13.1523 5.90678 13.1523 8.01152C13.1523 10.1162 11.4465 11.8221 9.34178 11.8221C7.23709 11.822 5.5313 10.1162 5.53124 8.01152C5.53124 5.90679 7.23705 4.20001 9.34178 4.2Z"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={24.841}
        height={21.941}
        x={0}
        y={2.74}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.46} />
        <feGaussianBlur stdDeviation={1.46} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_11714_157162"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_11714_157162"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgHeadcountPlanning)
export default ForwardRef
