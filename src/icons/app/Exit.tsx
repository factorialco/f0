import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgExit = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11.9 19a.9.9 0 0 1-.9.9H8A3.9 3.9 0 0 1 4.1 16V8A3.9 3.9 0 0 1 8 4.1h3a.9.9 0 1 1 0 1.8H8A2.1 2.1 0 0 0 5.9 8v8c0 1.16.94 2.1 2.1 2.1h3a.9.9 0 0 1 .9.9"
    />
    <Path
      fill="currentColor"
      d="M19.699 11.432a.9.9 0 0 1-.062 1.204l-3 3a.9.9 0 0 1-1.273-1.272l1.464-1.464H10a.9.9 0 1 1 0-1.8h6.827l-1.464-1.464a.9.9 0 1 1 1.273-1.272l3 3z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgExit)
export default ForwardRef
