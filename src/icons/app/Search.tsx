import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSearch = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11.515 3.828a7.69 7.69 0 0 1 7.689 7.687c0 1.798-.621 3.45-1.656 4.76l2.36 2.36a.9.9 0 1 1-1.273 1.273l-2.36-2.36a7.65 7.65 0 0 1-4.76 1.656 7.689 7.689 0 0 1 0-15.376m0 1.8a5.888 5.888 0 1 0 0 11.775 5.888 5.888 0 0 0 0-11.775"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSearch)
export default ForwardRef
