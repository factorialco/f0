import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCheck = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.587 6.955a.9.9 0 0 1 1.273 1.273l-8.816 8.816a1 1 0 0 1-.141.115.9.9 0 0 1-1.132-.115l-3.63-3.63a.9.9 0 0 1 1.272-1.273l2.994 2.993z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCheck)
export default ForwardRef
