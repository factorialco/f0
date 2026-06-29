import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgPencil = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M13.864 4.864a3.728 3.728 0 0 1 5.273 5.272l-7.5 7.5a.9.9 0 0 1-.4.232l-5.5 1.5a.9.9 0 0 1-1.105-1.105l1.5-5.5.039-.111a.9.9 0 0 1 .193-.288zM6.783 17.216l2.484-.677-1.807-1.807zm11.08-11.08a1.93 1.93 0 0 0-2.726 0L8.273 13 11 15.727l6.864-6.864a1.93 1.93 0 0 0 0-2.727"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgPencil)
export default ForwardRef
