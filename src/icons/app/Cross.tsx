import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCross = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.364 5.364a.9.9 0 0 1 1.272 1.272L13.273 12l5.364 5.364a.902.902 0 0 1-1.273 1.274L12 13.273l-5.364 5.364a.901.901 0 0 1-1.272-1.274L10.726 12 5.364 6.636a.9.9 0 0 1 1.272-1.272L12 10.726z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCross)
export default ForwardRef
