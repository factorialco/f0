import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgEnvelope = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.5 4.6a3.9 3.9 0 0 1 3.9 3.9v7a3.9 3.9 0 0 1-3.9 3.9h-11a3.9 3.9 0 0 1-3.9-3.9v-7a3.9 3.9 0 0 1 3.9-3.9zm-4.201 7.897a3.9 3.9 0 0 1-2.596 0L4.399 10.27V15.5c0 1.16.941 2.1 2.1 2.1h11a2.1 2.1 0 0 0 2.1-2.1v-5.229zM6.499 6.4a2.1 2.1 0 0 0-2.093 1.964l6.896 2.434c.452.16.946.16 1.398 0l6.893-2.432A2.097 2.097 0 0 0 17.5 6.4z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgEnvelope)
export default ForwardRef
