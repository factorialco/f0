import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMasonry = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M9 12.1c1.049 0 1.9.85 1.9 1.9v4c0 1.049-.851 1.9-1.9 1.9H6A1.9 1.9 0 0 1 4.1 18v-4A1.9 1.9 0 0 1 6 12.1zm9 2a1.9 1.9 0 0 1 1.9 1.9v2a1.9 1.9 0 0 1-1.9 1.9h-3a1.9 1.9 0 0 1-1.9-1.9v-2a1.9 1.9 0 0 1 1.9-1.9zm-12-.2a.1.1 0 0 0-.1.1v4a.1.1 0 0 0 .1.1h3c.055 0 .1-.045.1-.1v-4c0-.056-.045-.1-.1-.1zm9 2a.1.1 0 0 0-.1.1v2a.1.1 0 0 0 .1.1h3a.1.1 0 0 0 .1-.1v-2a.1.1 0 0 0-.1-.1zm3-11.8A1.9 1.9 0 0 1 19.9 6v4c0 1.05-.851 1.9-1.9 1.9h-3a1.9 1.9 0 0 1-1.9-1.9V6A1.9 1.9 0 0 1 15 4.1zm-3 1.8a.1.1 0 0 0-.1.1v4a.1.1 0 0 0 .1.1h3c.055 0 .1-.044.1-.1V6a.1.1 0 0 0-.1-.1zM9 4.1A1.9 1.9 0 0 1 10.9 6v2A1.9 1.9 0 0 1 9 9.9H6A1.9 1.9 0 0 1 4.1 8V6A1.9 1.9 0 0 1 6 4.1zM6 5.9a.1.1 0 0 0-.1.1v2a.1.1 0 0 0 .1.1h3c.055 0 .1-.045.1-.1V6c0-.055-.045-.1-.1-.1z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgMasonry)
export default ForwardRef
