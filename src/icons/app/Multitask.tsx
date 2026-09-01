import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMultitask = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8h8M4 7.333 5.5 9 9 6M4 11.333 5.5 13 9 10M4 15.333 5.5 17 9 14M12 12h8M12 16h8"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgMultitask)
export default ForwardRef
