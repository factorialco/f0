import { Ref, forwardRef } from "react"
import Svg, { Circle, Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMonitorDot = (props: SvgProps, ref: Ref<Svg>) => (
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
    <Circle cx={19} cy={6} r={3} />
    <Path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9M12 17v4M8 21h8" />
  </Svg>
)
const ForwardRef = forwardRef(SvgMonitorDot)
export default ForwardRef
