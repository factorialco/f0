import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgReceiptAi = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M14.15 3.406a3.65 3.65 0 0 1 3.65 3.65v5.013a.651.651 0 0 1-1.3 0V7.056a2.35 2.35 0 0 0-2.35-2.35h-6a2.35 2.35 0 0 0-2.35 2.35v11.826c.001.299.351.46.578.266l1.18-1.012a1.65 1.65 0 0 1 2.182.03l1.144 1.037a.35.35 0 0 0 .477-.006l.5-.479a.65.65 0 1 1 .9.938l-.498.478c-.626.6-1.61.615-2.252.033L8.867 19.13a.35.35 0 0 0-.463-.006l-1.18 1.011c-1.07.917-2.723.157-2.724-1.252V7.056a3.65 3.65 0 0 1 3.65-3.65zm-2 8a.651.651 0 0 1 0 1.3h-4a.651.651 0 0 1 0-1.3zm2-4a.651.651 0 0 1 0 1.3h-6a.651.651 0 0 1 0-1.3z"
    />
    <Path
      fill="currentColor"
      d="M16.681 14.713a.5.5 0 0 1 .938 0l.532 1.437a.5.5 0 0 0 .295.295l1.437.532a.5.5 0 0 1 0 .938l-1.437.531a.5.5 0 0 0-.295.296l-.532 1.436a.5.5 0 0 1-.938 0l-.532-1.436a.5.5 0 0 0-.295-.296l-1.437-.531a.5.5 0 0 1 0-.938l1.437-.532a.5.5 0 0 0 .296-.295z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgReceiptAi)
export default ForwardRef
