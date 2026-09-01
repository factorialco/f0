import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgAlertCircleLine = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 1 0 18.001 9 9 0 0 1 0-18m0 1.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4m0 9.237c.635 0 1.151.515 1.151 1.15a1.151 1.151 0 0 1-2.3 0c0-.635.514-1.15 1.15-1.15m0-6.987c.653 0 1.169.557 1.118 1.207l-.303 3.9a.818.818 0 0 1-1.629 0l-.302-3.9A1.12 1.12 0 0 1 12 7.05"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgAlertCircleLine)
export default ForwardRef
