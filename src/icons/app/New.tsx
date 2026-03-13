import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgNew = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10 4.35a.651.651 0 0 1 0 1.3H8A2.35 2.35 0 0 0 5.65 8v8A2.35 2.35 0 0 0 8 18.35h8A2.35 2.35 0 0 0 18.35 16v-2.5a.65.65 0 0 1 1.3 0V16A3.65 3.65 0 0 1 16 19.65H8A3.65 3.65 0 0 1 4.35 16V8A3.65 3.65 0 0 1 8 4.35zm5.746.022a2.745 2.745 0 0 1 3.882 3.882l-5.555 5.557a.65.65 0 0 1-.29.167l-4.074 1.11a.65.65 0 0 1-.797-.797l1.11-4.075.028-.08a.7.7 0 0 1 .14-.208zm2.963.92a1.446 1.446 0 0 0-2.044 0l-5.434 5.433-.767 2.81 2.81-.766 5.435-5.434a1.446 1.446 0 0 0 0-2.044"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgNew)
export default ForwardRef
