import { Ref, forwardRef } from "react"
import Svg, { Circle, Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgWatch = (props: SvgProps, ref: Ref<Svg>) => (
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
    <Circle cx={12} cy={12} r={6} />
    <Path d="M12 10v2l1 1M16.13 7.66l-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05M7.88 16.36l.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
  </Svg>
)
const ForwardRef = forwardRef(SvgWatch)
export default ForwardRef
