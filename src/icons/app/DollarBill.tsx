import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgDollarBill = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17 5.1A3.9 3.9 0 0 1 20.9 9v6a3.9 3.9 0 0 1-3.9 3.9H7A3.9 3.9 0 0 1 3.1 15V9A3.9 3.9 0 0 1 7 5.1zM7 6.9A2.1 2.1 0 0 0 4.9 9v6c0 1.16.94 2.1 2.1 2.1h10a2.1 2.1 0 0 0 2.1-2.1V9A2.1 2.1 0 0 0 17 6.9zm7 1.2a.9.9 0 0 1 0 1.8h-2.5a.6.6 0 0 0 0 1.2h1a2.4 2.4 0 0 1 0 4.8H10a.9.9 0 0 1 0-1.8h2.5a.6.6 0 0 0 0-1.2h-1a2.4 2.4 0 0 1 0-4.8zM7 11a1 1 0 1 1-.002 2A1 1 0 0 1 7 11m10 0a1 1 0 1 1-.002 2A1 1 0 0 1 17 11"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgDollarBill)
export default ForwardRef
