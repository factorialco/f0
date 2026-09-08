import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCalendarArrowLeft = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15.365 13.864a.9.9 0 0 1 1.272 1.272L15.174 16.6H20a.9.9 0 0 1 0 1.8h-4.827l1.463 1.464a.9.9 0 0 1-1.272 1.272l-3-3a.9.9 0 0 1 0-1.272zM15 2.1a.9.9 0 0 1 .9.9v1.1h.101a3.9 3.9 0 0 1 3.9 3.9v4a.901.901 0 0 1-1.8 0v-1.1h-12.2V16c0 1.16.94 2.1 2.1 2.1h2a.901.901 0 0 1 0 1.8h-2A3.9 3.9 0 0 1 4.1 16V8A3.9 3.9 0 0 1 8 4.1h.1V3a.9.9 0 0 1 1.8 0v1.1h4.2V3a.9.9 0 0 1 .9-.9M8 5.9A2.1 2.1 0 0 0 5.9 8v1.1h12.201V8a2.1 2.1 0 0 0-2.1-2.1h-.1V7a.9.9 0 0 1-1.8 0V5.9H9.9V7a.9.9 0 0 1-1.8 0V5.9z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCalendarArrowLeft)
export default ForwardRef
