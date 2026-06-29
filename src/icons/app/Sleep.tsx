import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSleep = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10.5 12.6a.901.901 0 0 1 .636 1.536L5.673 19.6H10.5a.9.9 0 0 1 0 1.8h-7a.9.9 0 0 1-.636-1.536L8.327 14.4H3.5a.9.9 0 0 1 0-1.8zm10-10a.9.9 0 0 1 .636 1.537L15.673 9.6H20.5a.9.9 0 0 1 0 1.8h-7a.901.901 0 0 1-.636-1.537L18.327 4.4H13.5a.9.9 0 0 1 0-1.8z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSleep)
export default ForwardRef
