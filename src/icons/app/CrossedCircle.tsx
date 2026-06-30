import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCrossedCircle = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m3.637 5.364a.9.9 0 0 0-1.273 0L12 10.727 9.637 8.364a.9.9 0 0 0-1.273 1.272L10.728 12l-2.364 2.364a.9.9 0 1 0 1.273 1.272L12 13.273l2.364 2.363a.9.9 0 0 0 1.273-1.272L13.273 12l2.364-2.364a.9.9 0 0 0 0-1.272"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCrossedCircle)
export default ForwardRef
