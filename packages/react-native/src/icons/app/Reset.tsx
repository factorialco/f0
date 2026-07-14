import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgReset = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M7.363 2.863a.9.9 0 0 1 1.273 1.273L7.172 5.6H12a7.9 7.9 0 0 1 7.3 4.877 7.9 7.9 0 0 1-1.713 8.609A7.9 7.9 0 0 1 4.1 13.499a.9.9 0 0 1 1.8 0 6.103 6.103 0 0 0 7.29 5.984A6.1 6.1 0 0 0 12 7.4H7.171l1.464 1.463a.9.9 0 0 1-1.273 1.273l-3-3a.9.9 0 0 1-.062-1.205l.062-.068z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgReset)
export default ForwardRef
