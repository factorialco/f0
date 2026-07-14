import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgChevronDown = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M5.143 8.756a.9.9 0 0 0 0 1.273l6.22 6.22c.33.329.852.35 1.205.062l.068-.062 6.22-6.22a.9.9 0 0 0-1.272-1.273L12 14.34 6.416 8.756a.9.9 0 0 0-1.273 0"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgChevronDown)
export default ForwardRef
