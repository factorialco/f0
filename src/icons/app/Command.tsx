import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCommand = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.5 4.6c2.154 0 3.9 1.746 3.9 3.9v7a3.9 3.9 0 0 1-3.9 3.9h-11a3.9 3.9 0 0 1-3.9-3.9v-7a3.9 3.9 0 0 1 3.9-3.9zm-11 1.8a2.1 2.1 0 0 0-2.1 2.1v7c0 1.159.94 2.1 2.1 2.1h11a2.1 2.1 0 0 0 2.1-2.1v-7c0-1.16-.94-2.1-2.1-2.1zm.864 1.964a.9.9 0 0 1 1.273 0l3 3a.9.9 0 0 1 0 1.272l-3 3a.9.9 0 0 1-1.273-1.272L9.728 12 7.364 9.636a.9.9 0 0 1 0-1.272M16 14.1a.9.9 0 0 1 0 1.8h-3a.9.9 0 0 1 0-1.8z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCommand)
export default ForwardRef
