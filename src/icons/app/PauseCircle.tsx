import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgPauseCircle = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m-2 5.1a.9.9 0 0 0-.9.9v6a.9.9 0 0 0 1.8 0V9a.9.9 0 0 0-.9-.9m4 0a.9.9 0 0 0-.9.9v6a.9.9 0 0 0 1.8 0V9a.9.9 0 0 0-.9-.9"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgPauseCircle)
export default ForwardRef
