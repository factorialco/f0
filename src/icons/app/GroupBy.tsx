import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgGroupBy = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15.1 15.5a2.4 2.4 0 0 1 2.4-2.4h1a2.4 2.4 0 0 1 2.4 2.4v1a2.4 2.4 0 0 1-2.4 2.4h-1a2.4 2.4 0 0 1-2.4-2.4zm1.8 1a.6.6 0 0 0 .6.6h1a.6.6 0 0 0 .6-.6v-1a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6zM3.1 7.5a2.4 2.4 0 0 1 2.4-2.4h13a2.4 2.4 0 0 1 2.4 2.4v1a2.4 2.4 0 0 1-2.4 2.4h-13a2.4 2.4 0 0 1-2.4-2.4zm1.8 1a.6.6 0 0 0 .6.6h13a.6.6 0 0 0 .6-.6v-1a.6.6 0 0 0-.6-.6h-13a.6.6 0 0 0-.6.6zM9.1 15.5a2.4 2.4 0 0 1 2.4-2.4h1a2.4 2.4 0 0 1 2.4 2.4v1a2.4 2.4 0 0 1-2.4 2.4h-1a2.4 2.4 0 0 1-2.4-2.4zm1.8 1a.6.6 0 0 0 .6.6h1a.6.6 0 0 0 .6-.6v-1a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6zM3.1 15.5a2.4 2.4 0 0 1 2.4-2.4h1a2.4 2.4 0 0 1 2.4 2.4v1a2.4 2.4 0 0 1-2.4 2.4h-1a2.4 2.4 0 0 1-2.4-2.4zm1.8 1a.6.6 0 0 0 .6.6h1a.6.6 0 0 0 .6-.6v-1a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgGroupBy)
export default ForwardRef
