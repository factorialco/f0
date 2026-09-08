import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMagnifierMinus = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11.5 3.6a7.9 7.9 0 0 1 7.9 7.9 7.86 7.86 0 0 1-1.716 4.91l2.452 2.454a.9.9 0 1 1-1.272 1.272l-2.453-2.452A7.86 7.86 0 0 1 11.5 19.4a7.9 7.9 0 0 1 0-15.8m0 1.8a6.1 6.1 0 1 0 0 12.2 6.1 6.1 0 0 0 0-12.2m2.5 5.2a.9.9 0 0 1 0 1.8H9a.9.9 0 1 1 0-1.8z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgMagnifierMinus)
export default ForwardRef
