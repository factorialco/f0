import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgWindows = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M20 12.726v7.524l-8.537-1.35v-6.19zm-9.672-.062v6.127l-6.323-.883v-5.276zm0-1.18H4.004L4 6.242l6.328-.885zM20 11.407h-8.537v-6.16L20 4z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgWindows)
export default ForwardRef
