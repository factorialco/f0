import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCircle = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M19.2 12a7.2 7.2 0 1 0-7.2 7.2V21a9 9 0 1 1 0-18 9 9 0 0 1 0 18v-1.8a7.2 7.2 0 0 0 7.2-7.2"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCircle)
export default ForwardRef
