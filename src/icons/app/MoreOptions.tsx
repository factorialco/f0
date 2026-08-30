import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMoreOptions = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M9 13.1c1.049 0 1.9.851 1.9 1.9v3c0 1.049-.851 1.9-1.9 1.9H6c-1.05 0-1.9-.851-1.9-1.9v-3A1.9 1.9 0 0 1 6 13.1zm9 0c1.049 0 1.9.851 1.9 1.9v3c0 1.049-.851 1.9-1.9 1.9h-3c-1.05 0-1.9-.851-1.9-1.9v-3a1.9 1.9 0 0 1 1.9-1.9zM6 14.9a.1.1 0 0 0-.1.1v3c0 .055.045.1.1.1h3c.055 0 .1-.045.1-.1v-3c0-.055-.045-.1-.1-.1zm9 0a.1.1 0 0 0-.1.1v3c0 .055.045.1.1.1h3c.055 0 .1-.045.1-.1v-3c0-.055-.045-.1-.1-.1zM9 4.1c1.049 0 1.9.851 1.9 1.9v3c0 1.049-.851 1.9-1.9 1.9H6c-1.05 0-1.9-.851-1.9-1.9V6A1.9 1.9 0 0 1 6 4.1zm9 0c1.049 0 1.9.851 1.9 1.9v3c0 1.049-.851 1.9-1.9 1.9h-3c-1.05 0-1.9-.851-1.9-1.9V6A1.9 1.9 0 0 1 15 4.1zM6 5.9a.1.1 0 0 0-.1.1v3c0 .055.045.1.1.1h3c.055 0 .1-.045.1-.1V6c0-.055-.045-.1-.1-.1zm9 0a.1.1 0 0 0-.1.1v3c0 .055.045.1.1.1h3c.055 0 .1-.045.1-.1V6a.1.1 0 0 0-.1-.1z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgMoreOptions)
export default ForwardRef
