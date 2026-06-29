import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgAi = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10 5.1a.9.9 0 0 1 .9.9c0 3.504 2.409 6.1 5.1 6.1a.9.9 0 0 1 0 1.8c-2.607 0-4.949 2.436-5.093 5.774L10.9 20l-.004.091A.9.9 0 0 1 9.1 20c0-3.504-2.408-6.1-5.1-6.1a.9.9 0 1 1 0-1.8c2.692 0 5.1-2.596 5.1-6.1a.9.9 0 0 1 .9-.9m0 4.793c-.646 1.307-1.61 2.395-2.791 3.106 1.18.71 2.145 1.798 2.791 3.106.647-1.307 1.61-2.395 2.79-3.106-1.18-.71-2.143-1.799-2.79-3.106m7.5-6.543a.65.65 0 0 1 .65.65A1.85 1.85 0 0 0 20 5.85a.65.65 0 0 1 0 1.3A1.85 1.85 0 0 0 18.15 9a.65.65 0 0 1-1.3 0A1.85 1.85 0 0 0 15 7.15a.65.65 0 0 1 0-1.3A1.85 1.85 0 0 0 16.85 4a.65.65 0 0 1 .65-.65"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgAi)
export default ForwardRef
