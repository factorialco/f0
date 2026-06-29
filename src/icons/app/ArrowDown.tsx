import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgArrowDown = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3.838c.497 0 .9.404.9.9v12.359l4.739-4.757a.9.9 0 0 1 1.274 1.27l-6.275 6.3a.9.9 0 0 1-1.138.112l-.137-.113-6.276-6.298a.9.9 0 0 1 1.275-1.27l4.739 4.756V4.738a.9.9 0 0 1 .9-.9"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgArrowDown)
export default ForwardRef
