import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgInfo = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11 9.1c1.05 0 1.9.851 1.9 1.9v6q-.001.052-.005.1H14a.9.9 0 0 1 0 1.8h-4a.9.9 0 0 1-.092-1.794L10 17.1h1c.054 0 .1-.046.1-.101v-6c0-.055-.046-.1-.1-.1h-1a.9.9 0 0 1 0-1.8zm.25-4.1a1.25 1.25 0 1 1 0 2.501 1.25 1.25 0 0 1 0-2.501"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgInfo)
export default ForwardRef
