import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgHome = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M9.734 4.014a3.9 3.9 0 0 1 4.534 0l4 2.857a3.9 3.9 0 0 1 1.633 3.173v5.957c0 2.153-1.747 3.9-3.9 3.9H15c-1.05 0-1.9-.852-1.9-1.901v-2.5a1.1 1.1 0 0 0-2.2 0V18c0 1.049-.851 1.9-1.9 1.9H8A3.9 3.9 0 0 1 4.1 16v-5.956a3.9 3.9 0 0 1 1.634-3.173zm3.487 1.465a2.1 2.1 0 0 0-2.441 0l-4 2.857a2.1 2.1 0 0 0-.88 1.708v5.957c0 1.16.94 2.1 2.1 2.1h1c.055 0 .1-.046.1-.101v-2.5a2.9 2.9 0 1 1 5.8 0V18c0 .055.045.1.1.1h1c1.16 0 2.1-.94 2.1-2.1v-5.956c0-.678-.328-1.314-.88-1.708z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgHome)
export default ForwardRef
