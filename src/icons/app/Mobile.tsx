import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMobile = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15.5 2.6a3.9 3.9 0 0 1 3.9 3.9v11a3.9 3.9 0 0 1-3.9 3.9h-7a3.9 3.9 0 0 1-3.9-3.9v-11a3.9 3.9 0 0 1 3.9-3.9zm-7 1.8a2.1 2.1 0 0 0-2.1 2.1v11c0 1.16.94 2.1 2.1 2.1h7a2.1 2.1 0 0 0 2.1-2.1v-11a2.1 2.1 0 0 0-2.1-2.1h-.816a.9.9 0 0 1-.894 1h-3.5a.9.9 0 0 1-.896-1zm4.25 12.7a.9.9 0 0 1 0 1.8h-1.5a.9.9 0 0 1 0-1.8z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgMobile)
export default ForwardRef
