import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgPlus = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12.006 4.836a.9.9 0 0 1 .9.9v5.37h5.37a.9.9 0 0 1 0 1.8h-5.37v5.37a.9.9 0 0 1-1.8 0v-5.37h-5.37a.9.9 0 0 1 0-1.8h5.37v-5.37a.9.9 0 0 1 .9-.9"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgPlus)
export default ForwardRef
