import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMicrophoneNegative = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M6 10.1a.9.9 0 0 1 .9.9 5.1 5.1 0 0 0 6.049 5.012.901.901 0 0 1 .332 1.77 7 7 0 0 1-.38.058v1.26H14a.9.9 0 0 1 0 1.8h-4a.9.9 0 0 1 0-1.8h1.1v-1.261a6.9 6.9 0 0 1-6-6.84.9.9 0 0 1 .9-.9M4.364 4.363a.9.9 0 0 1 1.273 0l13 13a.9.9 0 1 1-1.273 1.273l-13-13a.9.9 0 0 1 0-1.273M18 10.1a.9.9 0 0 1 .9.9c0 1.06-.24 2.066-.669 2.966a.9.9 0 1 1-1.624-.775A5.1 5.1 0 0 0 17.101 11a.9.9 0 0 1 .9-.9m-9.022 1.726a.9.9 0 0 1 1.24.286c.16.254.373.472.622.638a.9.9 0 0 1-.997 1.5 3.9 3.9 0 0 1-1.15-1.183.9.9 0 0 1 .285-1.241M12.001 3.1A3.9 3.9 0 0 1 15.9 7v4a.9.9 0 0 1-1.8 0V7a2.1 2.1 0 0 0-4.05-.783.901.901 0 0 1-1.67-.671A3.9 3.9 0 0 1 12 3.1"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgMicrophoneNegative)
export default ForwardRef
