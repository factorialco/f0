import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgInfoCircleLine = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 1.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4m-.002 5.8a.9.9 0 0 1 .9.9v3.75a.9.9 0 0 1-1.8 0V11.5a.9.9 0 0 1 .9-.9M12 8a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgInfoCircleLine)
export default ForwardRef
