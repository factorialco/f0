import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgChevronRight = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M8.753 5.143a.9.9 0 0 1 1.273 0l6.22 6.22a.9.9 0 0 1 0 1.273l-6.22 6.22a.9.9 0 0 1-1.273-1.272L14.337 12 8.753 6.416a.9.9 0 0 1 0-1.273"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgChevronRight)
export default ForwardRef
