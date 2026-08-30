import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgArrowUp = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M5.065 11.667a.9.9 0 0 1 0-1.272l6.299-6.3a.9.9 0 0 1 1.272 0l6.3 6.3a.9.9 0 0 1-1.272 1.272L12.9 6.904v12.365a.9.9 0 0 1-1.8 0V6.905l-4.763 4.762a.9.9 0 0 1-1.272 0"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgArrowUp)
export default ForwardRef
