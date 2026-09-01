import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgTable = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M18 4.1A2.9 2.9 0 0 1 20.9 7v10a2.9 2.9 0 0 1-2.9 2.9H6A2.9 2.9 0 0 1 3.1 17V7A2.9 2.9 0 0 1 6 4.1zM4.9 17c0 .608.493 1.1 1.1 1.1h5.1v-3.2H4.9zm8 1.1H18a1.1 1.1 0 0 0 1.1-1.1v-2.1h-6.2zm-8-5h6.2v-2.7H4.9zm8 0h6.2v-2.7h-6.2zM6 5.9A1.1 1.1 0 0 0 4.9 7v1.6h14.2V7A1.1 1.1 0 0 0 18 5.9z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgTable)
export default ForwardRef
