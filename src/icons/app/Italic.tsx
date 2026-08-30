import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgItalic = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17 5.1a.9.9 0 1 1 0 1.8h-3.237l-1.7 10.2H15a.9.9 0 0 1 0 1.8H7a.9.9 0 1 1 0-1.8h3.237l1.7-10.2H9a.9.9 0 0 1 0-1.8z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgItalic)
export default ForwardRef
