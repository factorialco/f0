import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgLogoAvatar = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.91895 16.2844C5.94243 15.1275 5.35384 13.6325 5.35384 12C5.35384 8.32943 8.32943 5.35384 12 5.35384C15.6706 5.35384 18.6461 8.32943 18.6461 12C18.6461 13.6325 18.0576 15.1275 17.0811 16.2844C17.417 16.4944 17.739 16.7244 18.0453 16.973L18.1792 17.0815C19.3168 15.6997 20 13.9296 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.9296 4.68318 15.6997 5.82087 17.0815L5.95467 16.973C6.26096 16.7244 6.58297 16.4944 6.91895 16.2844Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      d="M17.0372 18.2154C15.6619 19.3313 13.9091 20 12 20C10.0909 20 8.33808 19.3313 6.96283 18.2154C8.33808 17.0995 10.0909 16.4308 12 16.4308C13.9091 16.4308 15.6619 17.0995 17.0372 18.2154Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      d="M12 14.7077C13.6314 14.7077 14.9539 13.3852 14.9539 11.7539C14.9539 10.1225 13.6314 8.8 12 8.8C10.3686 8.8 9.04614 10.1225 9.04614 11.7539C9.04614 13.3852 10.3686 14.7077 12 14.7077Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoAvatar)
export default ForwardRef
