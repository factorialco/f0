import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSwap = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15.9 16a.9.9 0 0 1-.9.9H8.174l1.464 1.464a.9.9 0 0 1-1.273 1.273l-3-3a.9.9 0 0 1 0-1.273l3-3a.9.9 0 0 1 1.273 1.273L8.173 15.1h6.828a.9.9 0 0 1 .9.9m2.737-8.636a.9.9 0 0 1 0 1.272l-3 3a.9.9 0 1 1-1.273-1.272L15.828 8.9H9.001a.9.9 0 0 1 0-1.8h6.827l-1.464-1.464a.9.9 0 0 1 1.273-1.272z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSwap)
export default ForwardRef
