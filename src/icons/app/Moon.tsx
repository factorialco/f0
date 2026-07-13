import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMoon = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M7.285 7.445q.002-.704.104-1.381A7.47 7.47 0 1 0 17.936 16.61 9.27 9.27 0 0 1 7.285 7.445m1.8 0a7.47 7.47 0 0 0 10.544 6.81.9.9 0 0 1 1.191 1.19A9.27 9.27 0 1 1 8.554 3.18a.9.9 0 0 1 1.19 1.191 7.4 7.4 0 0 0-.66 3.075"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgMoon)
export default ForwardRef
