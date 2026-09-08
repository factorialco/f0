import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgHandshake = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M7.242 5.485a3.9 3.9 0 0 1 5.515 0l.254.254a3.9 3.9 0 0 1 5.247.246l1.549 1.55a4.9 4.9 0 0 1 0 6.93l-4.757 4.758a2.9 2.9 0 0 1-4.101 0l-.027-.027a2.9 2.9 0 0 1-3.474-.474l-.078-.078a2.31 2.31 0 0 1-2.507-.508l-.25-.25a2.67 2.67 0 0 1-.346-3.346l-.283-.283a3.9 3.9 0 0 1 0-5.514zm9.742 1.773a2.1 2.1 0 0 0-2.688-.235l1.09 1.09a2.669 2.669 0 0 1-3.773 3.774L10.5 10.772l-3.864 3.864.001.001-.75.75a.87.87 0 0 0 0 1.227l.25.25a.515.515 0 0 0 .647.065l.08-.065 2.5-2.5a.9.9 0 0 1 1.273 1.273l-1.861 1.86c.432.38 1.09.365 1.502-.047l2.086-2.086a.9.9 0 0 1 1.273 1.272l-1.362 1.36a1.1 1.1 0 0 0 1.504-.046l4.756-4.758a3.1 3.1 0 0 0 0-4.384zm-5.5-.5a2.1 2.1 0 0 0-2.97 0l-3.257 3.257a2.1 2.1 0 0 0 0 2.97l.243.242 4.364-4.364.068-.06a.9.9 0 0 1 1.204.06l1.75 1.751a.868.868 0 0 0 1.227-1.228z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgHandshake)
export default ForwardRef
