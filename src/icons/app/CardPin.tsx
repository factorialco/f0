import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCardPin = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17 5.1A3.9 3.9 0 0 1 20.9 9v6a3.9 3.9 0 0 1-3.9 3.9H7A3.9 3.9 0 0 1 3.1 15V9A3.9 3.9 0 0 1 7 5.1zM7 6.9A2.1 2.1 0 0 0 4.9 9v6c0 1.16.94 2.1 2.1 2.1h10a2.1 2.1 0 0 0 2.1-2.1V9A2.1 2.1 0 0 0 17 6.9zm1.352 3.9a1.2 1.2 0 1 1-.001 2.401 1.2 1.2 0 0 1 0-2.4m3.648 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4m3.649 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCardPin)
export default ForwardRef
