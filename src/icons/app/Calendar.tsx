import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCalendar = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M16.226 3.874H7.774a3.9 3.9 0 0 0-3.9 3.9v8.452a3.9 3.9 0 0 0 3.9 3.9h8.452a3.9 3.9 0 0 0 3.9-3.9V7.774a3.9 3.9 0 0 0-3.9-3.9M5.674 16.226V10.32h12.652v5.906a2.1 2.1 0 0 1-2.1 2.1H7.774a2.1 2.1 0 0 1-2.1-2.1m2.1-10.552h8.452c1.16 0 2.1.94 2.1 2.1v.746H5.674v-.746c0-1.16.94-2.1 2.1-2.1"
    />
    <Path
      fill="currentColor"
      d="M15 2.85a.9.9 0 0 1 .9.9v2.611a.9.9 0 0 1-1.8 0V3.75a.9.9 0 0 1 .9-.9M9 2.748a.9.9 0 0 1 .9.9V6.26a.9.9 0 0 1-1.8 0V3.65a.9.9 0 0 1 .9-.9"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCalendar)
export default ForwardRef
