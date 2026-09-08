import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgQuote = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10 5.1a.9.9 0 0 1 0 1.8A4.1 4.1 0 0 0 5.9 11v1.1h1.6c1.878 0 3.4 1.523 3.4 3.4a3.401 3.401 0 0 1-6.8 0V11A5.9 5.9 0 0 1 10 5.1m9 0a.9.9 0 0 1 0 1.8 4.1 4.1 0 0 0-4.1 4.1v1.1h1.6c1.878 0 3.4 1.523 3.4 3.4a3.401 3.401 0 0 1-6.8 0V11A5.9 5.9 0 0 1 19 5.1M5.9 15.5a1.6 1.6 0 1 0 1.6-1.6H5.9zm9 0a1.6 1.6 0 1 0 1.6-1.6h-1.6z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgQuote)
export default ForwardRef
