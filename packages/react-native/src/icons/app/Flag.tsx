import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgFlag = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M6 3.1a.9.9 0 0 1 .9.9v.343c1.269-.28 2.306-.35 3.212-.236 1.187.148 2.07.6 2.888 1.145 1.136.757 2.719.834 4.46-.472a.9.9 0 0 1 1.44.72V15a.9.9 0 0 1-.36.72c-2.258 1.694-4.675 1.77-6.539.528-.683-.455-1.3-.754-2.113-.855-.722-.09-1.657-.032-2.988.298V20a.9.9 0 1 1-1.8 0V4a.9.9 0 0 1 .9-.9m3.888 2.794c-.722-.09-1.657-.032-2.988.297v7.653c1.269-.28 2.306-.35 3.212-.237 1.187.149 2.07.6 2.888 1.144 1.057.705 2.5.82 4.1-.22V7.073c-1.812.811-3.627.657-5.099-.324-.683-.455-1.3-.754-2.113-.855"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgFlag)
export default ForwardRef
