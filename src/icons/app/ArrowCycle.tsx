import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgArrowCycle = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M18.948 4.908a.9.9 0 0 1 0 1.8h-.782c2.745 3.194 2.608 8.018-.414 11.047a8.08 8.08 0 0 1-5.755 2.383.9.9 0 0 1 .005-1.8 6.28 6.28 0 0 0 4.477-1.854 6.345 6.345 0 0 0 .454-8.446v.693a.9.9 0 0 1-1.8 0V4.908zm-6.955-1.034a.901.901 0 0 1-.005 1.8A6.28 6.28 0 0 0 7.51 7.528a6.345 6.345 0 0 0-.454 8.446v-.693a.9.9 0 0 1 1.8 0v3.823H5.042a.9.9 0 0 1 0-1.8h.782c-2.745-3.194-2.608-8.018.414-11.047a8.08 8.08 0 0 1 5.755-2.383"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgArrowCycle)
export default ForwardRef
