import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgFile = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12.533 2.85c1.013 0 1.986.395 2.714 1.1l2.72 2.638a3.9 3.9 0 0 1 1.187 2.8v7.863a3.9 3.9 0 0 1-3.9 3.9H8.75a3.9 3.9 0 0 1-3.9-3.9V6.75a3.9 3.9 0 0 1 3.9-3.9zM8.75 4.65a2.1 2.1 0 0 0-2.1 2.1V17.25c0 1.16.94 2.1 2.1 2.1h6.504a2.1 2.1 0 0 0 2.1-2.1V9.388a2.1 2.1 0 0 0-.639-1.507l-2.72-2.64a2.1 2.1 0 0 0-1.462-.591z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgFile)
export default ForwardRef
