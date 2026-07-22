import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgShare = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M9.576 3.826a.9.9 0 0 1 0 1.8H7.728a2.1 2.1 0 0 0-2.1 2.1v8.547c0 1.16.94 2.1 2.1 2.1h8.545a2.1 2.1 0 0 0 2.1-2.1v-3.789a.9.9 0 0 1 1.8 0v3.789a3.9 3.9 0 0 1-3.9 3.9H7.728a3.9 3.9 0 0 1-3.9-3.9V7.726a3.9 3.9 0 0 1 3.9-3.9zm7.132-.73a.9.9 0 0 1 1.272 0l2.925 2.924a.9.9 0 0 1 0 1.273l-2.925 2.925a.9.9 0 0 1-1.272-1.273l1.388-1.388h-3.114a2.1 2.1 0 0 0-2.1 2.1v2.362a.9.9 0 0 1-1.8 0V9.657a3.9 3.9 0 0 1 3.9-3.9h3.114l-1.388-1.39a.9.9 0 0 1 0-1.272"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgShare)
export default ForwardRef
