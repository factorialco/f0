import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgFaceId = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M5 15.1a.9.9 0 0 1 .9.9c.001 1.16.941 2.1 2.1 2.1a.9.9 0 0 1 0 1.8A3.9 3.9 0 0 1 4.1 16a.9.9 0 0 1 .9-.9m14.001 0a.9.9 0 0 1 .9.9c0 2.154-1.747 3.9-3.9 3.9a.9.9 0 0 1 0-1.8c1.16 0 2.1-.94 2.1-2.1a.9.9 0 0 1 .9-.9m-5.063-1.803a.9.9 0 0 1 1.124 1.406 4.9 4.9 0 0 1-6.124 0 .9.9 0 0 1 1.125-1.406 3.1 3.1 0 0 0 3.875 0M10 9.1a.9.9 0 0 1 .9.9v1a.9.9 0 1 1-1.8 0v-1a.9.9 0 0 1 .9-.9m4 0a.9.9 0 0 1 .9.9v1a.9.9 0 0 1-1.8 0v-1a.9.9 0 0 1 .9-.9m-6-5a.9.9 0 0 1 0 1.8A2.1 2.1 0 0 0 5.9 8a.9.9 0 0 1-1.8 0A3.9 3.9 0 0 1 8 4.1m8.001 0a3.9 3.9 0 0 1 3.9 3.9.901.901 0 0 1-1.8 0 2.1 2.1 0 0 0-2.1-2.1.9.9 0 0 1 0-1.8"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgFaceId)
export default ForwardRef
