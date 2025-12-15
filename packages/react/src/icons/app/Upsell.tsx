import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgUpsell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" ref={ref} {...props}>
    <path
      fill="#F5A51C"
      d="M21.0778 6.85106C21.0778 6.14261 20.6191 5.51571 19.9438 5.30139C19.2686 5.08708 18.5323 5.33468 18.1237 5.91346L8.36863 19.7332C8.01836 20.2294 7.97389 20.8795 8.25333 21.4187C8.53277 21.958 9.08951 22.2966 9.6969 22.2966H14.5744V29.6129C14.5744 30.3034 15.0106 30.9185 15.6621 31.1471C16.3137 31.3756 17.0385 31.1677 17.4699 30.6286L27.2249 18.4347C27.6153 17.9467 27.6915 17.2781 27.4207 16.7148C27.15 16.1515 26.5803 15.7932 25.9554 15.7932H21.0778V6.85106Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUpsell)
export default ForwardRef
