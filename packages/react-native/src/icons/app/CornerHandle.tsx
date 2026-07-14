import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCornerHandle = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15.864 10.863a.9.9 0 0 1 1.272 1.273l-5 5a.9.9 0 0 1-1.273-1.272zm-.5-5.499a.9.9 0 0 1 1.271 1.272l-10 10a.9.9 0 1 1-1.271-1.272z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCornerHandle)
export default ForwardRef
