import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgContactless = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M14.298 4.438a.9.9 0 0 1 1.264-.14 9.85 9.85 0 0 1 3.7 7.702 9.85 9.85 0 0 1-3.7 7.702.9.9 0 0 1-1.125-1.405A8.05 8.05 0 0 0 17.462 12a8.05 8.05 0 0 0-3.025-6.298.9.9 0 0 1-.14-1.264m-4 2.517a.9.9 0 0 1 1.265-.14 6.63 6.63 0 0 1 2.491 5.186c0 2.098-.975 3.97-2.491 5.185a.9.9 0 0 1-1.125-1.405 4.83 4.83 0 0 0 1.816-3.78 4.83 4.83 0 0 0-1.816-3.782.9.9 0 0 1-.14-1.264M6.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgContactless)
export default ForwardRef
