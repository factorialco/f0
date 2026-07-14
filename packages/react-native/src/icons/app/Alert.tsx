import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgAlert = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0-11c.848 0 1.52.715 1.467 1.56l-.469 7.502a1 1 0 0 1-1.996 0l-.47-7.501A1.47 1.47 0 0 1 12 5"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgAlert)
export default ForwardRef
