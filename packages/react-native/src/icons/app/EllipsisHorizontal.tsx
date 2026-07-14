import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgEllipsisHorizontal = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M16 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgEllipsisHorizontal)
export default ForwardRef
