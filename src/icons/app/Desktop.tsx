import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgDesktop = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.5 3.1A3.9 3.9 0 0 1 21.4 7v7a3.9 3.9 0 0 1-3.9 3.9h-1.6v1.7h1.6a.9.9 0 0 1 0 1.8h-11a.9.9 0 0 1 0-1.8h1.6v-1.7H6.5A3.9 3.9 0 0 1 2.6 14V7a3.9 3.9 0 0 1 3.9-3.9zM9.9 17.9v1.7h4.2v-1.7zm-3.4-13A2.1 2.1 0 0 0 4.4 7v7c0 1.16.94 2.1 2.1 2.1h11a2.1 2.1 0 0 0 2.1-2.1V7a2.1 2.1 0 0 0-2.1-2.1z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgDesktop)
export default ForwardRef
