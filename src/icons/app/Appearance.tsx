import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgAppearance = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 1-.001 18.001A9 9 0 0 1 12 3m0 1.8a7.2 7.2 0 0 0 0 14.4l.019-.001a1 1 0 0 1-.019-.2V5q0-.102.019-.199z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgAppearance)
export default ForwardRef
