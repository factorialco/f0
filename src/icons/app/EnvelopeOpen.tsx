import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgEnvelopeOpen = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10.702 3.004a3.9 3.9 0 0 1 2.596 0l4.669 1.647.832.293A3.9 3.9 0 0 1 21.4 8.621V15.5a3.9 3.9 0 0 1-3.9 3.9h-11a3.9 3.9 0 0 1-3.9-3.9V8.621a3.9 3.9 0 0 1 2.603-3.677l.83-.293zm2.596 9.493a3.9 3.9 0 0 1-2.596 0L4.4 10.27V15.5c0 1.16.94 2.1 2.1 2.1h11a2.1 2.1 0 0 0 2.1-2.1v-5.228zM12.699 4.7a2.1 2.1 0 0 0-1.398 0L6.633 6.348l-.832.294a2.1 2.1 0 0 0-1.385 1.726l6.885 2.43c.452.16.946.16 1.398 0l6.884-2.43a2.1 2.1 0 0 0-1.384-1.726l-.831-.294z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgEnvelopeOpen)
export default ForwardRef
