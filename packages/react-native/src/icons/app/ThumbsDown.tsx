import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgThumbsDown = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12.289 21.14a2.547 2.547 0 0 1-2.286-2.533v-2.672a.1.1 0 0 0-.1-.101H5.75a2.9 2.9 0 0 1-2.882-3.209l.459-4.291A3.9 3.9 0 0 1 7.204 4.85H18.25a2.9 2.9 0 0 1 2.9 2.9v5.185a2.9 2.9 0 0 1-2.9 2.899h-.661q-.179 0-.35.03a1 1 0 0 1-.148.032 2.1 2.1 0 0 0-1.338 1.02l-1.939 3.49-.106.165a1.45 1.45 0 0 1-1.16.581zm1.89-5.099a3.9 3.9 0 0 1 1.923-1.71V6.65H7.204a2.1 2.1 0 0 0-2.089 1.876l-.459 4.292a1.1 1.1 0 0 0 1.093 1.216h4.155a1.9 1.9 0 0 1 1.9 1.9v2.673c0 .345.235.633.554.718zm4.072-2.007a1.1 1.1 0 0 0 1.1-1.1V7.75a1.1 1.1 0 0 0-1.1-1.099h-.35v7.384z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgThumbsDown)
export default ForwardRef
