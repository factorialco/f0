import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgHeading3 = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11 6.1a.9.9 0 0 1 .9.9v10a.9.9 0 0 1-1.8 0v-4.1H4.9V17a.9.9 0 0 1-1.8 0V7a.9.9 0 1 1 1.8 0v4.1h5.2V7a.9.9 0 0 1 .9-.9m6.5 0a3.4 3.4 0 0 1 3.4 3.4c0 .99-.426 1.878-1.101 2.5a3.39 3.39 0 0 1 1.101 2.5 3.4 3.4 0 0 1-3.4 3.4H17a2.9 2.9 0 0 1-2.9-2.9.9.9 0 0 1 1.8 0c0 .607.493 1.1 1.1 1.1h.5a1.6 1.6 0 0 0 .01-3.2h-.01a.9.9 0 0 1-.503-.154.9.9 0 0 1 .502-1.646h.011a1.6 1.6 0 0 0-.01-3.2H17c-.607 0-1.1.493-1.1 1.1a.9.9 0 0 1-1.8 0c0-1.6 1.299-2.9 2.9-2.9z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgHeading3)
export default ForwardRef
