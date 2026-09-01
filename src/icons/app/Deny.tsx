import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgDeny = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18M7.586 17.686a7.2 7.2 0 0 0 10.1-10.1zM12 4.8a7.2 7.2 0 0 0-5.687 11.613l10.1-10.1A7.17 7.17 0 0 0 12 4.8"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgDeny)
export default ForwardRef
