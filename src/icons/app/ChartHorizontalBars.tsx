import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgChartHorizontalBars = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12.971 6.728a1.75 1.75 0 0 1-1.75 1.75H6.777a1.75 1.75 0 0 1-1.75-1.75v-1c0-.966.783-1.75 1.75-1.75h4.444c.966 0 1.75.784 1.75 1.75zm6 5.773a1.75 1.75 0 0 1-1.75 1.75H6.777a1.75 1.75 0 0 1-1.75-1.75v-1c0-.967.783-1.75 1.75-1.75H17.22c.966 0 1.75.783 1.75 1.75zm-3 5.77a1.75 1.75 0 0 1-1.75 1.75H6.777a1.75 1.75 0 0 1-1.75-1.75v-1c0-.966.783-1.75 1.75-1.75h7.444c.966 0 1.75.784 1.75 1.75zm-4.5-12.543a.25.25 0 0 0-.25-.25H6.777a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h4.444a.25.25 0 0 0 .25-.25zm6 5.773a.25.25 0 0 0-.25-.25H6.777a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25H17.22a.25.25 0 0 0 .25-.25zm-3 5.77a.25.25 0 0 0-.25-.25H6.777a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h7.444a.25.25 0 0 0 .25-.25z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgChartHorizontalBars)
export default ForwardRef
