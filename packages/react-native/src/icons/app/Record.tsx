import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgRecord = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 1-.001 18 9 9 0 0 1 0-18m0 1.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4m0 1.8a5.4 5.4 0 1 1-.001 10.8 5.4 5.4 0 0 1 0-10.8"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgRecord)
export default ForwardRef
