import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSidebarHide = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.5 4.6c2.154 0 3.9 1.746 3.9 3.9v7a3.9 3.9 0 0 1-3.9 3.9h-11a3.9 3.9 0 0 1-3.9-3.9v-7a3.9 3.9 0 0 1 3.9-3.9zm-8.6 13h8.6a2.1 2.1 0 0 0 2.1-2.1v-7c0-1.16-.94-2.1-2.1-2.1H8.9zM6.5 6.4a2.1 2.1 0 0 0-2.1 2.1v7c0 1.159.94 2.1 2.1 2.1h.6V6.4zm7.363 2.464a.9.9 0 0 1 1.273 1.273l-.963.963H16.5a.9.9 0 0 1 0 1.8h-2.329l.965.964a.9.9 0 0 1-1.273 1.273l-2.5-2.5a.9.9 0 0 1 0-1.273z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSidebarHide)
export default ForwardRef
