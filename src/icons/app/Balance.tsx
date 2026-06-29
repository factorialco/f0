import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgBalance = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="m5.065 11.602 13.999 1a.901.901 0 0 1-.128 1.795l-6.036-.431V18.1H14a.9.9 0 0 1 0 1.8h-4a.9.9 0 0 1 0-1.8h1.1v-4.263l-6.164-.44a.9.9 0 0 1 .129-1.795M17 4.1a3.401 3.401 0 1 1 0 6.802A3.401 3.401 0 0 1 17 4.1m-9.5-1a3.4 3.4 0 1 1 0 6.802 3.4 3.4 0 0 1 0-6.802m0 1.8a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgBalance)
export default ForwardRef
