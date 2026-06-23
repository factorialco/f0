import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgChevronUp = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M5.144 15.25a.9.9 0 0 1 0-1.273l6.22-6.22a.9.9 0 0 1 1.273 0l.01.011 6.21 6.209a.9.9 0 0 1-1.273 1.272L12 9.668 6.417 15.25a.9.9 0 0 1-1.273 0"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgChevronUp)
export default ForwardRef
