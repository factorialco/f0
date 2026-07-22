import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgBookmark = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15 3.1c2.154 0 3.9 1.747 3.9 3.9v10.798c0 2.034-2.373 3.145-3.936 1.844l-2.26-1.883a1.1 1.1 0 0 0-1.408 0l-2.26 1.883c-1.562 1.302-3.935.19-3.936-1.844V7A3.9 3.9 0 0 1 9 3.1zM9 4.9A2.1 2.1 0 0 0 6.9 7v10.798a.6.6 0 0 0 .984.461l2.26-1.883a2.9 2.9 0 0 1 3.713 0l2.26 1.883a.6.6 0 0 0 .983-.46V7A2.1 2.1 0 0 0 15 4.9z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgBookmark)
export default ForwardRef
