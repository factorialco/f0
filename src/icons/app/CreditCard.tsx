import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCreditCard = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.5 4.6a3.9 3.9 0 0 1 3.9 3.9v7a3.9 3.9 0 0 1-3.9 3.9h-11a3.9 3.9 0 0 1-3.9-3.9v-7a3.9 3.9 0 0 1 3.9-3.9zM4.4 15.5c0 1.16.94 2.1 2.1 2.1h11a2.1 2.1 0 0 0 2.1-2.1v-4.6H4.4zm6.1-2.4a.9.9 0 0 1 0 1.8H7a.9.9 0 0 1 0-1.8zm-4-6.7a2.1 2.1 0 0 0-2.1 2.1v.6h15.2v-.6a2.1 2.1 0 0 0-2.1-2.1z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCreditCard)
export default ForwardRef
