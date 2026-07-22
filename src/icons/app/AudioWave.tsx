import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgAudioWave = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M16.75 9a.9.9 0 1 1 1.8 0v6a.9.9 0 0 1-1.8 0zM13.75 7a.9.9 0 1 1 1.8 0v10a.9.9 0 0 1-1.8 0zM10.75 5a.9.9 0 0 1 1.8 0v14a.9.9 0 0 1-1.8 0zM7.75 7a.9.9 0 1 1 1.8 0v10a.9.9 0 0 1-1.8 0zM4.75 9a.9.9 0 1 1 1.8 0v6a.9.9 0 0 1-1.8 0z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgAudioWave)
export default ForwardRef
