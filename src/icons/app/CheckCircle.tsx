import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCheckCircle = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 1.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4m2.698 4.204a.9.9 0 0 1 1.273 1.272L11.248 15a.9.9 0 0 1-.638.262.9.9 0 0 1-.636-.262L8.03 13.055a.9.9 0 0 1 1.273-1.273l1.307 1.308z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCheckCircle)
export default ForwardRef
