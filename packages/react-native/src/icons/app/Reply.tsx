import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgReply = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M4.1 6.37a.9.9 0 0 1 1.8 0c0 1.677.006 2.362.133 2.908a5.1 5.1 0 0 0 3.809 3.809c.546.127 1.23.133 2.908.133h4.076l-1.963-1.963a.9.9 0 0 1 1.274-1.274l3.5 3.5a.9.9 0 0 1 0 1.274l-3.5 3.5a.9.9 0 0 1-1.274-1.274l1.963-1.963H12.75c-1.576 0-2.518.006-3.316-.18A6.9 6.9 0 0 1 4.28 9.686c-.186-.798-.18-1.74-.18-3.316"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgReply)
export default ForwardRef
