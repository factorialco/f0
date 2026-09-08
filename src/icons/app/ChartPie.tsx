import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgChartPie = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11 5.1a.9.9 0 0 1 .9.9v6.1H18a.9.9 0 0 1 .9.9A7.901 7.901 0 1 1 11 5.1m-.9 1.866a6.102 6.102 0 0 0 .9 12.135 6.1 6.1 0 0 0 6.034-5.201H11a.9.9 0 0 1-.9-.9zM14 3.1a6.9 6.9 0 0 1 6.9 6.9.9.9 0 0 1-.9.9h-6a.9.9 0 0 1-.9-.9V4a.9.9 0 0 1 .9-.9m.9 6h4.119a5.1 5.1 0 0 0-4.12-4.12z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgChartPie)
export default ForwardRef
