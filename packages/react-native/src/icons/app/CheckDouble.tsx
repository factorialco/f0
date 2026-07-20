import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCheckDouble = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M18.864 8.364a.9.9 0 0 1 1.272 1.273l-8.5 8.5a.9.9 0 0 1-1.272-1.273zm-3-2.5a.9.9 0 0 1 1.272 1.272l-8.5 8.5a.897.897 0 0 1-1.272 0l-3.5-3.5a.9.9 0 0 1 1.272-1.272L8 13.727z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCheckDouble)
export default ForwardRef
