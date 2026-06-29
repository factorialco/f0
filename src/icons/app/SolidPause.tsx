import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSolidPause = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M6.2 18V6a1.8 1.8 0 0 1 3.6 0v12a1.8 1.8 0 0 1-3.6 0m8 0V6a1.8 1.8 0 0 1 3.6 0v12a1.8 1.8 0 0 1-3.6 0"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSolidPause)
export default ForwardRef
