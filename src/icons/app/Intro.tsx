import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgIntro = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M4.1 13.75a.9.9 0 0 1 .264-.637l3.5-3.499a.9.9 0 1 1 1.273 1.273L7.173 12.85H18.1v-5.2H15a.9.9 0 0 1 0-1.8h4a.9.9 0 0 1 .9.9v7a.9.9 0 0 1-.9.9H7.173l1.964 1.964a.9.9 0 0 1-1.273 1.272l-3.5-3.5-.113-.137a.9.9 0 0 1-.15-.5"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgIntro)
export default ForwardRef
