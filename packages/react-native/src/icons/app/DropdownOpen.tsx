import { Ref, forwardRef } from "react"
import Svg, { Rect, Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgDropdownOpen = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect
      width={16}
      height={16}
      x={4}
      y={4}
      fill="#052657"
      fillOpacity={0.06}
      rx={4}
    />
    <Path
      fill="currentColor"
      d="M7.163 14.356a.9.9 0 0 1 0-1.273l4.11-4.108.01-.012a.9.9 0 0 1 .297-.197.9.9 0 0 1 .975.197l4.2 4.2a.9.9 0 0 1-1.272 1.273l-3.564-3.563-3.483 3.483a.9.9 0 0 1-1.273 0"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgDropdownOpen)
export default ForwardRef
