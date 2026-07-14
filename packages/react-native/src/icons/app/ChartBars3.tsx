import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgChartBars3 = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.27 4.825a3.9 3.9 0 0 1 3.9 3.9v6.552a3.9 3.9 0 0 1-3.9 3.9H6.73a3.9 3.9 0 0 1-3.9-3.9V8.725a3.9 3.9 0 0 1 3.9-3.9zm-10.54 1.8a2.1 2.1 0 0 0-2.1 2.1v6.552c0 1.159.94 2.1 2.1 2.1h10.54a2.1 2.1 0 0 0 2.1-2.1V8.725a2.1 2.1 0 0 0-2.1-2.1zM8.88 9.66a.901.901 0 0 1 1.439 1.081 2.1 2.1 0 0 0 2.94 2.94.9.9 0 0 1 1.082 1.44A3.9 3.9 0 0 1 8.88 9.66m2.838-.778a.9.9 0 0 1 1.06-.703 3.9 3.9 0 0 1 3.044 3.043.9.9 0 0 1-1.764.357 2.1 2.1 0 0 0-1.637-1.637.9.9 0 0 1-.703-1.06"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgChartBars3)
export default ForwardRef
