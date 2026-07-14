import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgAlertCircle = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 11.037a1.15 1.15 0 1 0 .001 2.3 1.15 1.15 0 0 0 0-2.3m0-6.987a1.12 1.12 0 0 0-1.116 1.207l.302 3.9a.82.82 0 0 0 .815.754c.426 0 .78-.33.814-.754l.303-3.9a1.12 1.12 0 0 0-1.117-1.207"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgAlertCircle)
export default ForwardRef
