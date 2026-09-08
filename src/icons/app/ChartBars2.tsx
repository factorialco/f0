import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgChartBars2 = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.27 4.825a3.9 3.9 0 0 1 3.9 3.9v6.552a3.9 3.9 0 0 1-3.9 3.9H6.73a3.9 3.9 0 0 1-3.9-3.9V8.725a3.9 3.9 0 0 1 3.9-3.9zm-10.54 1.8a2.1 2.1 0 0 0-2.1 2.1v6.552c0 1.159.94 2.1 2.1 2.1h10.54a2.1 2.1 0 0 0 2.1-2.1V8.725a2.1 2.1 0 0 0-2.1-2.1zM10.694 9.1a.9.9 0 0 1 .66.286l2.494 2.67 2.495-2.67a.9.9 0 0 1 1.316 1.228l-3.153 3.376a.9.9 0 0 1-1.316 0L10.7 11.322 7.66 14.61a.9.9 0 0 1-1.322-1.222l3.696-4 .067-.066a.9.9 0 0 1 .592-.223"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgChartBars2)
export default ForwardRef
