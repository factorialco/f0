import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgTextSize = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M8.1 18V6.9H4a.9.9 0 0 1 0-1.8h10a.9.9 0 1 1 0 1.8H9.9V18a.9.9 0 0 1-1.8 0m7 0v-5.1H13a.9.9 0 0 1 0-1.8h6a.9.9 0 1 1 0 1.8h-2.1V18a.9.9 0 1 1-1.8 0"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgTextSize)
export default ForwardRef
