import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgUnderline = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17 17.1a.9.9 0 0 1 0 1.8H7a.9.9 0 0 1 0-1.8zm-1-12a.9.9 0 0 1 .9.9v5a4.901 4.901 0 0 1-9.8 0V6a.9.9 0 0 1 1.8 0v5a3.1 3.1 0 0 0 6.2 0V6a.9.9 0 0 1 .9-.9"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgUnderline)
export default ForwardRef
