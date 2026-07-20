import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSliders = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M8 12.1a.9.9 0 0 1 .9.9v8a.9.9 0 0 1-1.8 0v-8a.9.9 0 0 1 .9-.9m8 7a.9.9 0 0 1 .9.9v1a.9.9 0 0 1-1.8 0v-1a.9.9 0 0 1 .9-.9m1.5-6a2.4 2.4 0 0 1 0 4.8h-3a2.4 2.4 0 0 1 0-4.8zm-3 1.8a.6.6 0 0 0 0 1.2h3a.6.6 0 1 0 0-1.2zM16 2.1a.9.9 0 0 1 .9.9v8a.9.9 0 0 1-1.8 0V3a.9.9 0 0 1 .9-.9m-6.5 4a2.4 2.4 0 0 1 0 4.8h-3a2.4 2.4 0 1 1 0-4.8zm-3 1.8a.6.6 0 0 0 0 1.2h3a.6.6 0 0 0 0-1.2zM8 2.1a.9.9 0 0 1 .9.9v1a.9.9 0 0 1-1.8 0V3a.9.9 0 0 1 .9-.9"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSliders)
export default ForwardRef
