import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgPartiallyCompleted = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 4.8a7.2 7.2 0 1 1 0 14.4 7.2 7.2 0 0 1 0-14.4M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0m14.4 0A5.4 5.4 0 0 0 12 6.6V12H6.6c0 1.8 1.08 5.4 5.4 5.4a5.4 5.4 0 0 0 5.4-5.4"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgPartiallyCompleted)
export default ForwardRef
