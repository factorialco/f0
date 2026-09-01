import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSignature = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M9 5.1a.9.9 0 0 1 0 1.8H7A2.1 2.1 0 0 0 4.9 9v6c0 1.16.94 2.1 2.1 2.1h10a2.1 2.1 0 0 0 2.1-2.1V9c0-.676-.334-1.211-.736-1.613a3.7 3.7 0 0 0-.724-.558l-.041-.022-.006-.004h.001a.9.9 0 0 1 .809-1.608v.002h.003l.004.002.01.005.026.014.087.048a5.468 5.468 0 0 1 1.104.848C20.235 6.712 20.9 7.678 20.9 9v6a3.9 3.9 0 0 1-3.9 3.9H7A3.9 3.9 0 0 1 3.1 15V9A3.9 3.9 0 0 1 7 5.1zm7 9a.9.9 0 0 1 0 1.8H8a.9.9 0 0 1 0-1.8zM14.241 3.518a.9.9 0 0 1 1.52.966l-3.501 5.5a.9.9 0 0 1-1.519-.966z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSignature)
export default ForwardRef
