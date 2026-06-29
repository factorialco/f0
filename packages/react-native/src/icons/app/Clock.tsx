import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgClock = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 1.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4m0 3.9a.9.9 0 0 1 .9.9v2.127l2.236 2.237a.9.9 0 1 1-1.273 1.273l-2.5-2.5a1 1 0 0 1-.115-.142l-.078-.145-.002-.007q-.013-.036-.022-.073a.9.9 0 0 1-.047-.27l.001-2.5a.9.9 0 0 1 .9-.9"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgClock)
export default ForwardRef
