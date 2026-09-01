import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgPaperclip = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M14.364 6.364a3.728 3.728 0 0 1 5.272 5.272l-7 7a5.143 5.143 0 1 1-7.272-7.273l5-5a.9.9 0 0 1 1.273 1.273l-5 5a3.343 3.343 0 0 0 4.727 4.727l7-7a1.928 1.928 0 1 0-2.728-2.727l-7 7a.515.515 0 0 0 .727.728l5-5a.9.9 0 0 1 1.273 1.272l-5 5a2.314 2.314 0 0 1-3.272-3.273z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgPaperclip)
export default ForwardRef
