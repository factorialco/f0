import { Ref, forwardRef } from "react"
import Svg, { Path, Rect } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMonitorSmartphone = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8M10 19v-3.96 3.15M7 19h5" />
    <Rect width={6} height={10} x={16} y={12} rx={2} />
  </Svg>
)
const ForwardRef = forwardRef(SvgMonitorSmartphone)
export default ForwardRef
