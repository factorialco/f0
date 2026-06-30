import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgValidation = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10.999 3.1c4.363 0 7.9 3.536 7.9 7.9a7.87 7.87 0 0 1-1.715 4.912l2.452 2.451a.9.9 0 1 1-1.273 1.273l-2.451-2.452a7.87 7.87 0 0 1-4.913 1.716 7.901 7.901 0 0 1 0-15.8m0 1.8a6.1 6.1 0 1 0 .003 12.201A6.1 6.1 0 0 0 10.999 4.9m1.78 3.56a.9.9 0 0 1 1.44 1.08l-3 4a.9.9 0 0 1-1.356.096l-2-2a.9.9 0 0 1 1.273-1.272l1.265 1.265z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgValidation)
export default ForwardRef
