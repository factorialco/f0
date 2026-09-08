import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgBell = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M13.565 17.9a.9.9 0 0 1 1.342 1.2 3.9 3.9 0 0 1-2.908 1.3 3.9 3.9 0 0 1-2.906-1.3.9.9 0 0 1 1.34-1.2c.387.43.945.7 1.566.7s1.18-.27 1.566-.7M12 3.6a5.9 5.9 0 0 1 5.9 5.9v.628l.704.704a3.262 3.262 0 0 1-2.306 5.569H7.702a3.264 3.264 0 0 1-2.306-5.569l.704-.705V9.5A5.9 5.9 0 0 1 12 3.6m0 1.8a4.1 4.1 0 0 0-4.1 4.1v.726c0 .414-.165.811-.458 1.104l-.773.775A1.463 1.463 0 0 0 7.702 14.6h8.596a1.463 1.463 0 0 0 1.034-2.496l-.775-.775a1.56 1.56 0 0 1-.457-1.104v-.725A4.1 4.1 0 0 0 12 5.4"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgBell)
export default ForwardRef
