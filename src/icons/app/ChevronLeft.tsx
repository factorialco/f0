import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgChevronLeft = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15.249 5.144a.9.9 0 0 0-1.273 0l-6.219 6.22a.897.897 0 0 0 0 1.272l6.22 6.219a.9.9 0 1 0 1.272-1.273L9.666 12l5.583-5.583a.9.9 0 0 0 0-1.273"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgChevronLeft)
export default ForwardRef
