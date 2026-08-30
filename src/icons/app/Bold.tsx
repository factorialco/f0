import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgBold = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12.5 4.6a3.9 3.9 0 0 1 3.229 6.085c2.068.399 3.671 2.15 3.671 4.315 0 2.413-1.992 4.312-4.4 4.396v.003H9A2.9 2.9 0 0 1 6.1 16.5v-9c0-1.601 1.299-2.9 2.9-2.9zM7.9 16.5A1.1 1.1 0 0 0 9 17.6h5.834c1.567 0 2.766-1.203 2.766-2.6s-1.199-2.6-2.766-2.6H7.9zM9 6.4c-.607 0-1.1.493-1.1 1.1v3.1h4.6a2.1 2.1 0 1 0 0-4.2z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgBold)
export default ForwardRef
