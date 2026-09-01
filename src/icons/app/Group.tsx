import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgGroup = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M7.5 3.6a1.9 1.9 0 0 1 1.9 1.9v.1h5.2v-.1a1.9 1.9 0 0 1 1.9-1.9h2c1.049 0 1.9.85 1.9 1.9v2a1.9 1.9 0 0 1-1.9 1.9h-.1v5.2h.1c1.049 0 1.899.85 1.9 1.9v2a1.9 1.9 0 0 1-1.9 1.9h-2a1.9 1.9 0 0 1-1.9-1.9v-.1H9.4v.1a1.9 1.9 0 0 1-1.9 1.9h-2a1.9 1.9 0 0 1-1.9-1.9v-2a1.9 1.9 0 0 1 1.9-1.9h.1V9.4h-.1a1.9 1.9 0 0 1-1.9-1.9v-2a1.9 1.9 0 0 1 1.9-1.9zm-2 12.8a.1.1 0 0 0-.1.1v2a.1.1 0 0 0 .1.1h2a.1.1 0 0 0 .1-.1v-2a.1.1 0 0 0-.1-.1zm11 0a.1.1 0 0 0-.1.1v2a.1.1 0 0 0 .1.1h2a.1.1 0 0 0 .1-.1v-2a.1.1 0 0 0-.1-.1zM9.4 7.5a1.9 1.9 0 0 1-1.9 1.9h-.1v5.2h.1a1.9 1.9 0 0 1 1.9 1.9v.1h5.2v-.1a1.9 1.9 0 0 1 1.9-1.9h.1V9.4h-.1a1.9 1.9 0 0 1-1.9-1.9v-.1H9.4zM5.5 5.4a.1.1 0 0 0-.1.1v2a.1.1 0 0 0 .1.1h2a.1.1 0 0 0 .1-.1v-2a.1.1 0 0 0-.1-.1zm11 0a.1.1 0 0 0-.1.1v2a.1.1 0 0 0 .1.1h2a.1.1 0 0 0 .1-.1v-2a.1.1 0 0 0-.1-.1z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgGroup)
export default ForwardRef
