import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgSplit = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.308 19.89a.886.886 0 0 0 1.265 0l2.353-2.386a.914.914 0 0 0 0-1.281l-2.353-2.386a.886.886 0 0 0-1.265 0 .916.916 0 0 0 0 1.28l.829.841H13.53a2.08 2.08 0 0 1-1.61-.772l-2.159-2.66A4 4 0 0 0 9.242 12q.283-.237.52-.527l2.158-2.66c.396-.488.987-.77 1.61-.77h4.607l-.829.838a.916.916 0 0 0 0 1.281.886.886 0 0 0 1.265 0l2.353-2.386a.914.914 0 0 0 0-1.28L18.573 4.11a.886.886 0 0 0-1.265 0 .916.916 0 0 0 0 1.281l.829.84H13.53a3.86 3.86 0 0 0-2.992 1.433l-2.156 2.659c-.396.487-.987.77-1.61.77H3.74a.89.89 0 0 0-.632.267.9.9 0 0 0-.262.64c0 .5.4.906.894.906h3.032c.623 0 1.213.284 1.609.772l2.157 2.659a3.86 3.86 0 0 0 2.992 1.433h4.607l-.829.839a.916.916 0 0 0 0 1.282"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgSplit)
export default ForwardRef
