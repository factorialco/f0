import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgInputField = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15 5.1a.9.9 0 1 1 0 1.8h-2.1v10.2H15a.9.9 0 1 1 0 1.8H9a.9.9 0 0 1 0-1.8h2.1V6.9H9a.9.9 0 0 1 0-1.8zm-7 3a.9.9 0 0 1 0 1.8H6A1.1 1.1 0 0 0 4.9 11v2c0 .607.493 1.1 1.1 1.1h2a.9.9 0 0 1 0 1.8H6A2.9 2.9 0 0 1 3.1 13v-2A2.9 2.9 0 0 1 6 8.1zm10 0a2.9 2.9 0 0 1 2.9 2.9v2c0 1.601-1.3 2.9-2.9 2.9h-2a.9.9 0 0 1 0-1.8h2c.607 0 1.1-.493 1.1-1.1v-2A1.1 1.1 0 0 0 18 9.9h-2a.9.9 0 0 1 0-1.8z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgInputField)
export default ForwardRef
