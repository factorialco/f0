import { Ref, forwardRef } from "react"
import Svg, { Circle, Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgShoppingCart = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle cx={8} cy={21} r={1} />
    <Circle cx={19} cy={21} r={1} />
    <Path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </Svg>
)
const ForwardRef = forwardRef(SvgShoppingCart)
export default ForwardRef
