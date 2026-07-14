import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgArrowRight = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12.333 5.065a.9.9 0 0 1 1.273 0l6.298 6.298a.9.9 0 0 1 0 1.273l-6.298 6.3a.9.9 0 0 1-1.273-1.273l4.764-4.763H4.73a.9.9 0 0 1 0-1.8h12.365l-4.763-4.763a.9.9 0 0 1 0-1.272"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgArrowRight)
export default ForwardRef
