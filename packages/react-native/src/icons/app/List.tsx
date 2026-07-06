import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgList = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M5 15a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2m14 .1a.9.9 0 0 1 0 1.8H9a.9.9 0 1 1 0-1.8zM5 11a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2m14 .1a.9.9 0 0 1 0 1.8H9a.9.9 0 0 1 0-1.8zM5 7a1 1 0 1 1 0 2.001A1 1 0 0 1 5 7m14 .1a.9.9 0 0 1 0 1.8H9a.9.9 0 1 1 0-1.8z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgList)
export default ForwardRef
