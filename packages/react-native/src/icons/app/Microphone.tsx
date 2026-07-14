import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMicrophone = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M18 10.1a.9.9 0 0 1 .9.9 6.9 6.9 0 0 1-6 6.84v1.26H14a.9.9 0 1 1 0 1.8h-4a.9.9 0 0 1 0-1.8h1.1v-1.26a6.9 6.9 0 0 1-6-6.84.9.9 0 1 1 1.8 0 5.1 5.1 0 0 0 10.2 0 .9.9 0 0 1 .9-.9m-6-7A3.9 3.9 0 0 1 15.9 7v4a3.9 3.9 0 0 1-7.8 0V7A3.9 3.9 0 0 1 12 3.1m0 1.8A2.1 2.1 0 0 0 9.9 7v4a2.1 2.1 0 0 0 4.2 0V7A2.1 2.1 0 0 0 12 4.9"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgMicrophone)
export default ForwardRef
