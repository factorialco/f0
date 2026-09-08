import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgFaceSuperNegative = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 10.5c-1.038 0-1.989.325-2.7.825-.677.476-1.3 1.24-1.3 2.175a1 1 0 0 0 .897.995L9 17.5h6a1 1 0 0 0 .995-.898L16 16.5c0-.934-.624-1.699-1.3-2.175-.712-.5-1.663-.825-2.7-.825M8.44 8.103a1 1 0 0 0-1.055 1.686l.084.059.644.402-.644.402a1 1 0 0 0 1.06 1.696l2-1.25.104-.075a1 1 0 0 0 0-1.546l-.103-.075-2-1.25zm8.407.367a1 1 0 0 0-1.288-.367l-.09.05-2 1.25-.103.074a1 1 0 0 0 0 1.546l.103.075 2 1.25a1 1 0 0 0 1.06-1.696l-.643-.402.644-.402.084-.059a1 1 0 0 0 .233-1.32"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgFaceSuperNegative)
export default ForwardRef
