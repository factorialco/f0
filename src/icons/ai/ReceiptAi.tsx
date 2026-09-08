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
      d="M15 3.35A3.65 3.65 0 0 1 18.65 7V12.2a.651.651 0 0 1-1.3 0V7A2.35 2.35 0 0 0 15 4.65H9A2.35 2.35 0 0 0 6.65 7v11.815c.001.307.37.465.592.253l.887-.849a1.65 1.65 0 0 1 2.396.123l.601.705a.35.35 0 0 0 .533 0l.87-1.024a.65.65 0 0 1 .99.842l-.869 1.023a1.65 1.65 0 0 1-2.514.002l-.6-.705a.35.35 0 0 0-.509-.026l-.886.848c-1.05 1.004-2.79.26-2.791-1.192V7A3.65 3.65 0 0 1 9 3.35zm-2 8.2a.651.651 0 0 1 0 1.3H9a.65.65 0 0 1 0-1.3zm2-4a.651.651 0 0 1 0 1.3H9a.65.65 0 0 1 0-1.3zM18.531 16.278c.102.274.318.49.591.59l1.438.532-1.438.531c-.273.102-.49.318-.59.591L18 19.96l-.531-1.438a1 1 0 0 0-.591-.59L15.44 17.4l1.438-.531c.273-.102.49-.317.59-.591L18 14.841z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgReceiptAi)
export default ForwardRef
