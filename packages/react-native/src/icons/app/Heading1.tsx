import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgHeading1 = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11 6.1a.9.9 0 0 1 .9.9v10a.9.9 0 0 1-1.8 0v-4.1H4.9V17a.9.9 0 0 1-1.8 0V7a.9.9 0 1 1 1.8 0v4.1h5.2V7a.9.9 0 0 1 .9-.9m8.092.005q.045.004.09.013a.9.9 0 0 1 .7.7l.013.09q.005.045.005.092v10a.9.9 0 0 1-1.8 0V9.649c-.337.156-.71.252-1.1.252a.9.9 0 0 1 0-1.8c.207 0 .49-.114.738-.362.248-.249.362-.531.362-.739q0-.094.018-.181a.9.9 0 0 1 .974-.714"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgHeading1)
export default ForwardRef
