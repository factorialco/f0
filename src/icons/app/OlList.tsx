import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgOlList = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M7.001 11.1a2.9 2.9 0 0 1 0 5.8c-.607 0-1.1.492-1.1 1.1v.1H9a.901.901 0 0 1 0 1.8H5a.9.9 0 0 1-.9-.9v-1c0-1.602 1.298-2.9 2.9-2.9a1.1 1.1 0 1 0-1.1-1.1.9.9 0 0 1-1.8 0c0-1.601 1.298-2.9 2.9-2.9M19 16.1a.9.9 0 1 1 0 1.8h-6a.9.9 0 0 1 0-1.8zm0-5a.9.9 0 0 1 0 1.8h-6a.9.9 0 0 1 0-1.8zM7 3.1a.9.9 0 0 1 .745.396.9.9 0 0 1 .155.504L7.9 10a.9.9 0 0 1-1.8 0V6.65c-.337.156-.709.25-1.1.25a.9.9 0 0 1 0-1.8c.208 0 .49-.113.739-.361.242-.243.355-.518.36-.723V4a.9.9 0 0 1 .9-.9zM19 6.1a.9.9 0 1 1 0 1.8h-6a.9.9 0 0 1 0-1.8z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgOlList)
export default ForwardRef
