import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMessages = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 10.6c1.601 0 2.9 1.299 2.9 2.9v3a2.9 2.9 0 0 1-2.9 2.9H7.373l-.883.883c-.882.881-2.39.257-2.39-.99V13.5A2.9 2.9 0 0 1 7 10.6zm-5 1.8a1.1 1.1 0 0 0-1.1 1.1v4.827l.464-.464.138-.113A.9.9 0 0 1 7 17.6H12a1.1 1.1 0 0 0 1.1-1.1v-3a1.1 1.1 0 0 0-1.1-1.1zm10-8.8a2.9 2.9 0 0 1 2.9 2.9v5.793c0 1.247-1.508 1.871-2.39.99l-.884-.883H16.5a.9.9 0 0 1 0-1.8h.5c.178 0 .352.053.498.15l.137.113.465.464V6.5A1.1 1.1 0 0 0 17 5.4h-5c-.607 0-1.1.493-1.1 1.1v2a.9.9 0 0 1-1.8 0v-2c0-1.601 1.299-2.9 2.9-2.9z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgMessages)
export default ForwardRef
