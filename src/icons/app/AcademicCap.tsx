import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgAcademicCap = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11.608 4.195c.256-.075.53-.075.786 0l.127.044L21.175 7.7c1.172.47 1.172 2.131 0 2.6l-1.274.51v4.86c0 .56-.334 1.066-.848 1.287l-6.5 2.786a1.4 1.4 0 0 1-1.104 0l-6.5-2.786a1.4 1.4 0 0 1-.848-1.287v-4.86l-1.274-.51c-1.174-.469-1.174-2.13 0-2.6L11.48 4.24zM16.9 12.01V13.5a.9.9 0 0 1-1.8 0v-.771l-2.58 1.032a1.4 1.4 0 0 1-1.039 0l-5.58-2.232v3.877L12 18.02l6.1-2.614v-3.877zM4.424 9 12 12.03l2.249-.9-2.65-1.325a.9.9 0 0 1 .803-1.61l4.001 2q.038.02.074.044L19.577 9 12 5.968z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgAcademicCap)
export default ForwardRef
