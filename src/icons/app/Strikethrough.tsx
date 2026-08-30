import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgStrikethrough = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12.919 5.1c1.331 0 2.514.853 2.935 2.116a.9.9 0 0 1-1.707.57 1.295 1.295 0 0 0-1.228-.886h-1.313a2.1 2.1 0 0 0 0 4.2h7.395a.9.9 0 0 1 0 1.8h-3.323a3.899 3.899 0 0 1-3.283 6H11.08a3.09 3.09 0 0 1-2.934-2.115.9.9 0 1 1 1.707-.57c.176.529.67.885 1.227.885h1.314a2.1 2.1 0 0 0 0-4.2H5a.9.9 0 0 1 0-1.8h3.323a3.897 3.897 0 0 1 3.283-6z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgStrikethrough)
export default ForwardRef
