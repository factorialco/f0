import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCloud = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12.001 5.1a4.9 4.9 0 0 1 4.828 4.071 4.9 4.9 0 0 1-.828 9.73H8a4.9 4.9 0 0 1-.83-9.73 4.9 4.9 0 0 1 4.83-4.07m0 1.8a3.1 3.1 0 0 0-3.1 3.1.9.9 0 0 1-.9.9 3.1 3.1 0 0 0 0 6.2h8a3.1 3.1 0 0 0 0-6.2.9.9 0 0 1-.9-.9A3.1 3.1 0 0 0 12 6.9"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCloud)
export default ForwardRef
