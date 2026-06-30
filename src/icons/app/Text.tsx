import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgText = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M7.001 7.6a2.9 2.9 0 0 1 2.9 2.9v5a.9.9 0 0 1-1.8 0v-2.1H5.9v2.1a.9.9 0 0 1-1.8 0v-5A2.9 2.9 0 0 1 7 7.6M19 7.6a.902.902 0 0 1 .781 1.347l-3.23 5.653H19a.9.9 0 0 1 0 1.8h-4a.9.9 0 0 1-.781-1.346l3.23-5.654H15a.9.9 0 0 1 0-1.8zm-6 4a.9.9 0 0 1 0 1.8h-1a.9.9 0 0 1 0-1.8zM7 9.4a1.1 1.1 0 0 0-1.1 1.1v1.1h2.2v-1.1A1.1 1.1 0 0 0 7 9.4"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgText)
export default ForwardRef
