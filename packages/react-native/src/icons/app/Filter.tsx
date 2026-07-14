import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgFilter = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.92 3.6c1.593 0 2.478 1.843 1.483 3.087l-4.481 5.601a.1.1 0 0 0-.022.062v4.236c0 .503-.2.987-.557 1.344l-2 1.999c-1.196 1.197-3.243.35-3.243-1.343V12.35a.1.1 0 0 0-.022-.062L4.597 6.687C3.602 5.443 4.487 3.6 6.08 3.6zM6.026 5.413a.1.1 0 0 0-.035.043.1.1 0 0 0-.012.056c.001.01.005.027.024.05l4.481 5.601a1.9 1.9 0 0 1 .416 1.187v6.236c0 .035.01.049.014.056a.1.1 0 0 0 .048.037.1.1 0 0 0 .059.008c.009-.002.026-.006.05-.03l2-2a.1.1 0 0 0 .029-.072V12.35c0-.43.148-.85.417-1.187l4.481-5.6a.1.1 0 0 0 .024-.05.1.1 0 0 0-.012-.057.1.1 0 0 0-.036-.043.1.1 0 0 0-.054-.013H6.08a.1.1 0 0 0-.054.013"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgFilter)
export default ForwardRef
