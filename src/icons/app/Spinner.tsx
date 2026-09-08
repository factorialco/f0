import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSpinner = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 4.1a.9.9 0 0 1 0 1.8 6.1 6.1 0 0 0-5.636 3.765 6.102 6.102 0 0 0 4.446 8.318A6.1 6.1 0 0 0 18.1 12a.9.9 0 0 1 1.8 0 7.9 7.9 0 0 1-4.877 7.3A7.901 7.901 0 1 1 12 4.1"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSpinner)
export default ForwardRef
