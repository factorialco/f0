import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgLms = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11.677 4.434c.211-.061.436-.062.647 0l.103.036 8.654 3.462c.963.386.963 1.75 0 2.135l-1.43.572v5.03c0 .46-.275.877-.698 1.058l-6.5 2.785a1.15 1.15 0 0 1-.906 0l-6.5-2.785a1.15 1.15 0 0 1-.697-1.057v-5.03l-1.43-.573c-.964-.386-.964-1.75 0-2.135l8.654-3.462zm.614 3.985a.65.65 0 0 0-.582 1.162l3.641 1.82V13.5a.65.65 0 0 0 1.3 0V11a.65.65 0 0 0-.359-.581z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgLms)
export default ForwardRef
