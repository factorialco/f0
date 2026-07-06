import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgVideo = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17 5.1A3.9 3.9 0 0 1 20.9 9v6a3.9 3.9 0 0 1-3.9 3.9H7A3.9 3.9 0 0 1 3.1 15V9A3.9 3.9 0 0 1 7 5.1zM7 6.9A2.1 2.1 0 0 0 4.9 9v6c0 1.16.94 2.1 2.1 2.1h10a2.1 2.1 0 0 0 2.1-2.1V9A2.1 2.1 0 0 0 17 6.9zm2.1 2.984a1.4 1.4 0 0 1 1.943-1.291l.177.09L14.75 10.8a1.4 1.4 0 0 1 0 2.4l-3.529 2.118a1.4 1.4 0 0 1-2.12-1.201zm1.8 3.526L13.25 12l-2.35-1.41z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgVideo)
export default ForwardRef
