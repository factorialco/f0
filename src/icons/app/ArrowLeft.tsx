import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgArrowLeft = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11.46 18.46a.65.65 0 0 1-.92 0l-6-6a.65.65 0 0 1 0-.92l6-6a.65.65 0 0 1 .92.92l-4.89 4.89H19a.65.65 0 0 1 0 1.3H6.57l4.89 4.89a.65.65 0 0 1 0 .92"
    />
    <Path
      fill="currentColor"
      d="M10.39 5.085a.9.9 0 1 1 1.27 1.275l-4.755 4.734H19.26a.9.9 0 0 1 0 1.8H6.906l4.753 4.732a.9.9 0 0 1-1.269 1.276l-6.299-6.27a.9.9 0 0 1-.112-1.139l.112-.138z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgArrowLeft)
export default ForwardRef
