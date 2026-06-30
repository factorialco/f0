import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgAlignTextRight = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M19 15.1a.9.9 0 0 1 0 1.8h-6a.9.9 0 0 1 0-1.8zm0-4a.9.9 0 0 1 0 1.8H5a.9.9 0 1 1 0-1.8zm0-4a.9.9 0 0 1 0 1.8H5a.9.9 0 0 1 0-1.8z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgAlignTextRight)
export default ForwardRef
