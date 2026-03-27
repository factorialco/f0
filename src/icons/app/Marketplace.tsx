import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgMarketplace = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M5 11v5a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1v-2a2 2 0 1 1 4 0v2a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-5"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.75 8.377.628-2.201A3 3 0 0 1 7.263 4h9.474a3 3 0 0 1 2.885 2.176l.628 2.2a2.058 2.058 0 0 1-3.819 1.486L16 9l-.553 1.106a1.618 1.618 0 0 1-2.894 0L12 9l-.553 1.106a1.618 1.618 0 0 1-2.894 0L8 9l-.431.862a2.058 2.058 0 0 1-3.82-1.485"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgMarketplace)
export default ForwardRef
