import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgBuilding = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10.089 3.043a3.9 3.9 0 0 1 3.823 0l5 2.813A3.9 3.9 0 0 1 20.9 9.254v5.491a3.9 3.9 0 0 1-1.987 3.399l-5 2.812a3.9 3.9 0 0 1-3.825 0l-5-2.812a3.9 3.9 0 0 1-1.987-3.399V9.254a3.9 3.9 0 0 1 1.987-3.398zM4.917 8.99a2 2 0 0 0-.016.265v5.491a2.1 2.1 0 0 0 1.07 1.83l5 2.813c.042.024.086.042.129.063v-6.93zm7.983 3.532v6.93c.043-.021.088-.039.13-.063l1.972-1.11-.002-.044v-3.168c0-.35.185-.677.486-.857l1.256-.755a.5.5 0 0 1 .759.429v2.99l.53-.297a2.1 2.1 0 0 0 1.07-1.83V9.253q0-.135-.018-.265zm.13-7.91a2.1 2.1 0 0 0-2.06 0l-5 2.813-.08.048L12 10.964l6.109-3.492q-.039-.026-.079-.048z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgBuilding)
export default ForwardRef
