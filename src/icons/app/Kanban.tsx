import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgKanban = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M9 4.1a2.4 2.4 0 0 1 2.4 2.4v11A2.4 2.4 0 0 1 9 19.9H6.5a2.4 2.4 0 0 1-2.4-2.4v-11a2.4 2.4 0 0 1 2.4-2.4zM6.5 5.9a.6.6 0 0 0-.6.6v11a.6.6 0 0 0 .6.6H9a.6.6 0 0 0 .6-.6v-11a.6.6 0 0 0-.6-.6zm10.999-1.8a2.4 2.4 0 0 1 2.4 2.4v7a2.4 2.4 0 0 1-2.4 2.4h-2.5a2.4 2.4 0 0 1-2.4-2.4v-7A2.4 2.4 0 0 1 15 4.1zm-2.5 1.8a.6.6 0 0 0-.6.6v7a.6.6 0 0 0 .6.6h2.5a.6.6 0 0 0 .6-.6v-7a.6.6 0 0 0-.6-.6z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgKanban)
export default ForwardRef
