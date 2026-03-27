import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgPushPinSolid = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M16.023 3.35a1.65 1.65 0 0 1 1.532 2.262L16.37 8.573a3.08 3.08 0 0 0 .43 3.038l1.458 1.875c.843 1.084.07 2.663-1.303 2.663H12.65V20a.65.65 0 0 1-1.3 0v-3.85H7.045c-1.373 0-2.146-1.58-1.303-2.664L7.2 11.611a3.08 3.08 0 0 0 .43-3.038l-1.185-2.96A1.65 1.65 0 0 1 7.977 3.35z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgPushPinSolid)
export default ForwardRef
