import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgHeading2 = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11 6.1a.9.9 0 0 1 .9.9v10a.9.9 0 0 1-1.8 0v-4.1H4.9V17a.9.9 0 0 1-1.8 0V7a.9.9 0 1 1 1.8 0v4.1h5.2V7a.9.9 0 0 1 .9-.9m6.5 0a3.4 3.4 0 1 1 0 6.8 1.6 1.6 0 0 0-1.6 1.6v1.6H20a.9.9 0 0 1 0 1.8h-5a.9.9 0 0 1-.9-.9v-2.5a3.4 3.4 0 0 1 3.4-3.4 1.6 1.6 0 1 0-1.6-1.6.9.9 0 0 1-1.8 0 3.4 3.4 0 0 1 3.4-3.4"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgHeading2)
export default ForwardRef
