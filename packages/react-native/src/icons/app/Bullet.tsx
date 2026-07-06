import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgBullet = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path fill="currentColor" d="M8 12a4 4 0 0 1 8 0 4 4 0 0 1-8 0" />
  </Svg>
)
const ForwardRef = forwardRef(SvgBullet)
export default ForwardRef
