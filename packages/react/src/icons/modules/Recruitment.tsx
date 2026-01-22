import type { SVGProps } from "react"

import { Ref, forwardRef } from "react"
const SvgRecruitment = (
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
      fillRule="evenodd"
      d="M11.5789 3.5C7.39321 3.5 4 6.89321 4 11.0789C4 15.2647 7.39321 18.6579 11.5789 18.6579C13.3684 18.6579 15.0131 18.0377 16.3096 17.0005L18.5624 19.2534C18.8913 19.5822 19.4245 19.5822 19.7534 19.2534C20.0822 18.9245 20.0822 18.3913 19.7534 18.0624L17.5005 15.8096C18.5377 14.5131 19.1579 12.8684 19.1579 11.0789C19.1579 6.89321 15.7647 3.5 11.5789 3.5ZM13.8991 9.14914C13.8991 10.3361 12.9369 11.2983 11.75 11.2983C10.5631 11.2983 9.60086 10.3361 9.60086 9.14914C9.60086 7.9622 10.5631 7 11.75 7C12.9369 7 13.8991 7.9622 13.8991 9.14914ZM11.75 12.0744C10.5441 12.0744 9.48023 12.6428 8.66086 13.2885C7.81198 13.9574 8.37704 15.1189 9.4578 15.1189H14.0422C15.123 15.1189 15.688 13.9574 14.8391 13.2885C14.0198 12.6428 12.9559 12.0744 11.75 12.0744Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRecruitment)
export default ForwardRef
