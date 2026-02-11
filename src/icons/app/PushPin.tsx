import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgPushPin = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M16.024 3.35a1.65 1.65 0 0 1 1.531 2.263L16.37 8.574a3.08 3.08 0 0 0 .43 3.038l1.458 1.875c.842 1.084.07 2.663-1.303 2.663h-4.304V20a.651.651 0 0 1-1.301 0v-3.85H7.045c-1.373 0-2.145-1.579-1.303-2.663L7.2 11.612a3.09 3.09 0 0 0 .43-3.038l-1.184-2.96a1.65 1.65 0 0 1 1.53-2.264zm-8.047 1.3a.35.35 0 0 0-.324.48l1.184 2.96a4.39 4.39 0 0 1-.61 4.32l-1.458 1.875a.35.35 0 0 0 .276.565h9.91a.35.35 0 0 0 .277-.565l-1.458-1.875a4.39 4.39 0 0 1-.61-4.32l1.184-2.96a.35.35 0 0 0-.324-.48z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgPushPin)
export default ForwardRef
