import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSchedule = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.5 10.1a5.4 5.4 0 1 1 0 10.801 5.4 5.4 0 0 1 0-10.801m0 1.8a3.6 3.6 0 1 0 .001 7.2 3.6 3.6 0 0 0 0-7.2M17 5.1A3.9 3.9 0 0 1 20.9 9a.9.9 0 0 1-1.8 0A2.1 2.1 0 0 0 17 6.9H7A2.1 2.1 0 0 0 4.9 9v6c0 1.16.94 2.1 2.1 2.1h3.501a.9.9 0 0 1 0 1.8h-3.5A3.9 3.9 0 0 1 3.1 15V9A3.9 3.9 0 0 1 7 5.1zm.5 8a.9.9 0 0 1 .9.9v1.017l1.1.733a.9.9 0 0 1-.999 1.498l-1.128-.752a1.73 1.73 0 0 1-.772-1.443V14a.9.9 0 0 1 .9-.9m-8.499 0a.901.901 0 0 1 0 1.8h-2a.9.9 0 0 1 0-1.8zm2-4a.9.9 0 0 1 0 1.8H7a.9.9 0 0 1 0-1.8z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSchedule)
export default ForwardRef
