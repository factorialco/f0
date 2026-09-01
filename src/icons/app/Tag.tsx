import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgTag = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M16.28 3.815a3.9 3.9 0 0 1 3.89 3.891l.01 4.212a3.9 3.9 0 0 1-1.178 2.8l-5.479 5.343a3.9 3.9 0 0 1-5.481-.035L3.8 15.786a3.9 3.9 0 0 1 .036-5.55l5.456-5.322a3.9 3.9 0 0 1 2.731-1.108zm-4.26 1.79a2.1 2.1 0 0 0-1.471.597l-5.457 5.321a2.1 2.1 0 0 0-.019 2.989l4.241 4.242c.813.813 2.13.821 2.953.018l5.478-5.342c.407-.397.636-.941.635-1.51l-.01-4.21a2.1 2.1 0 0 0-2.096-2.095zm1.34 3.126a1.35 1.35 0 1 1 1.907 1.91 1.35 1.35 0 0 1-1.908-1.91"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgTag)
export default ForwardRef
