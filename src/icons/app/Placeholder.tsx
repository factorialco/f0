import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgPlaceholder = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12.463 3.012A9 9 0 0 1 21 12l-.012.463A9 9 0 0 1 12 21l-.463-.012a9 9 0 0 1-8.525-8.525L3 12a9 9 0 0 1 9-9zM7.586 17.686A7.17 7.17 0 0 0 12 19.2a7.17 7.17 0 0 0 4.413-1.514L12 13.272zm-1.273-10.1A7.17 7.17 0 0 0 4.8 12c0 1.664.565 3.194 1.513 4.413L10.726 12zm6.959 4.413 4.414 4.414A7.17 7.17 0 0 0 19.2 12a7.17 7.17 0 0 0-1.514-4.414zM12 4.8a7.17 7.17 0 0 0-4.414 1.513l4.413 4.413 4.414-4.413A7.17 7.17 0 0 0 12 4.8"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgPlaceholder)
export default ForwardRef
