import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgEqual = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M18.5 13.6a.9.9 0 0 1 0 1.8h-13a.9.9 0 0 1 0-1.8zM18.5 8.6a.9.9 0 1 1 0 1.8h-13a.9.9 0 0 1 0-1.8z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgEqual)
export default ForwardRef
