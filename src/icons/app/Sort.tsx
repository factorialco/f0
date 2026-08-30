import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSort = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M16 8.1a.9.9 0 0 1 .9.9v6.827l1.464-1.464a.9.9 0 0 1 1.272 1.273l-3 3a.9.9 0 0 1-1.272 0l-3-3a.9.9 0 0 1 1.272-1.273l1.464 1.464V9a.9.9 0 0 1 .9-.9M7.363 5.363a.9.9 0 0 1 1.273 0l3 3a.9.9 0 0 1-1.273 1.273L8.9 8.172V15a.9.9 0 1 1-1.8 0V8.172L5.636 9.636a.9.9 0 1 1-1.273-1.273z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSort)
export default ForwardRef
