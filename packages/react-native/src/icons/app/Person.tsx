import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgPerson = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 14.885c2.923 0 6.055 1.61 7.895 3.739a.901.901 0 0 1-1.362 1.177c-1.537-1.778-4.19-3.115-6.533-3.116s-4.997 1.338-6.535 3.116a.9.9 0 0 1-1.361-1.177c1.84-2.129 4.972-3.738 7.896-3.739m0-11.034a5.15 5.15 0 1 1 0 10.299A5.15 5.15 0 0 1 12 3.85m0 1.8a3.35 3.35 0 1 0 0 6.699 3.35 3.35 0 0 0 0-6.699"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgPerson)
export default ForwardRef
