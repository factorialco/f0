import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgCrown = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10.198 5.062c.577-1.732 3.027-1.732 3.604 0l1.226 3.678a.1.1 0 0 0 .129.064l2.744-.999c1.44-.523 2.875.784 2.488 2.265l-1.933 7.415A3.9 3.9 0 0 1 14.68 20.4H9.318a3.9 3.9 0 0 1-3.774-2.916L3.61 10.07C3.223 8.59 4.66 7.282 6.097 7.805l2.745.999a.1.1 0 0 0 .129-.064zm1.74.517-.014.013a.1.1 0 0 0-.019.038l-1.227 3.68a1.9 1.9 0 0 1-2.451 1.185l-2.745-.998a.1.1 0 0 0-.054-.007.1.1 0 0 0-.047.027.1.1 0 0 0-.03.045.1.1 0 0 0 0 .054l1.935 7.414a2.1 2.1 0 0 0 2.032 1.57h5.363a2.1 2.1 0 0 0 2.032-1.57l1.935-7.414a.1.1 0 0 0 .001-.054.1.1 0 0 0-.03-.045.1.1 0 0 0-.048-.027.1.1 0 0 0-.054.007l-2.745.998a1.9 1.9 0 0 1-2.451-1.185l-1.226-3.68a.1.1 0 0 0-.02-.038l-.013-.013A.1.1 0 0 0 12 5.562c-.03 0-.051.01-.062.017"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgCrown)
export default ForwardRef
