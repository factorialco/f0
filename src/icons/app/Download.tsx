import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgDownload = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M20.4 11.1a.9.9 0 0 1 .9.9v4.2a3.9 3.9 0 0 1-3.9 3.9H6.6a3.9 3.9 0 0 1-3.9-3.9V12a.9.9 0 1 1 1.8 0v4.2c0 1.16.94 2.1 2.1 2.1h10.8a2.1 2.1 0 0 0 2.1-2.1V12a.9.9 0 0 1 .9-.9M12 2.85a.9.9 0 0 1 .9.9v9.327l1.64-1.64a.9.9 0 0 1 1.273 1.273l-3.176 3.176a.9.9 0 0 1-1.273 0L8.188 12.71a.9.9 0 0 1 1.273-1.272l1.64 1.638V3.75a.9.9 0 0 1 .9-.9"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgDownload)
export default ForwardRef
