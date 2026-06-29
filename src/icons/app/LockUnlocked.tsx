import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgLockUnlocked = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3.6a.9.9 0 1 1 0 1.8 3.1 3.1 0 0 0-3.1 3.1v1.1H16v.032a3.9 3.9 0 0 1 3.4 3.868v3a3.9 3.9 0 0 1-3.9 3.9h-7a3.9 3.9 0 0 1-3.9-3.9v-3a3.9 3.9 0 0 1 2.5-3.64V8.5A4.9 4.9 0 0 1 12 3.6m-3.5 7.8a2.1 2.1 0 0 0-2.1 2.1v3c0 1.16.94 2.1 2.1 2.1h7a2.1 2.1 0 0 0 2.1-2.1v-3a2.1 2.1 0 0 0-2.1-2.1zm3.5 1.2a.9.9 0 0 1 .9.9v3a.9.9 0 0 1-1.8 0v-3a.9.9 0 0 1 .9-.9"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgLockUnlocked)
export default ForwardRef
