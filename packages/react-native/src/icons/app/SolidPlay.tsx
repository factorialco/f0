import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSolidPlay = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M4 7.601c0-2.69 2.89-4.428 5.32-3.2l8.697 4.4c2.644 1.337 2.644 5.06 0 6.398l-8.698 4.4C6.89 20.826 4 19.088 4 16.398z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSolidPlay)
export default ForwardRef
