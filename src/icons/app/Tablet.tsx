import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgTablet = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M16.001 2.47c2.216 0 3.9 1.918 3.9 4.136v10.787c0 2.219-1.683 4.136-3.9 4.137h-8c-2.217 0-3.9-1.918-3.9-4.137V6.606C4.1 4.387 5.784 2.47 8 2.47zm-8 1.8c-1.097 0-2.1.98-2.1 2.336v10.787c0 1.356 1.003 2.337 2.1 2.337h8c1.096 0 2.1-.982 2.1-2.337V6.606c0-1.355-1.004-2.335-2.1-2.336zm4 10.43a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgTablet)
export default ForwardRef
