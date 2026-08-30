import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgFlask = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M16 3.1a.9.9 0 0 1 0 1.8h-.296v4.546c0 .83.252 1.64.723 2.325l3.157 4.584c1.325 1.924-.053 4.544-2.39 4.545H6.61c-2.336 0-3.713-2.62-2.388-4.545l3.156-4.584c.47-.684.723-1.495.723-2.325V4.9H8a.9.9 0 0 1 0-1.8zM7.065 15.4l-1.36 1.976a1.1 1.1 0 0 0 .905 1.724h10.586a1.1 1.1 0 0 0 .907-1.724l-1.36-1.976zM9.9 9.446a5.9 5.9 0 0 1-1.04 3.345l-.556.809h7.198l-.557-.809a5.9 5.9 0 0 1-1.04-3.345V4.9H9.9z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgFlask)
export default ForwardRef
