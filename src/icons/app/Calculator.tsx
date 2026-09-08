import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCalculator = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15 3.1A3.9 3.9 0 0 1 18.9 7v10a3.9 3.9 0 0 1-3.9 3.9H9A3.9 3.9 0 0 1 5.1 17V7A3.9 3.9 0 0 1 9 3.1zM6.9 16.9v.1c0 1.16.94 2.1 2.1 2.1h.1v-2.2zm4 0v2.2h2.2v-2.2zm4 2.2h.1a2.1 2.1 0 0 0 2.1-2.1v-4.1h-2.2zm-8-4h2.2v-2.2H6.9zm4 0h2.2v-2.2h-2.2zm-4-4h2.2V8.9H6.9zm4 0h2.2V8.9h-2.2zm4 0h2.2V8.9h-2.2zM9 4.9A2.1 2.1 0 0 0 6.9 7v.1h10.2V7A2.1 2.1 0 0 0 15 4.9z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCalculator)
export default ForwardRef
