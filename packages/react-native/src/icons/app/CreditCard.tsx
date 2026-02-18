import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCreditCard = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5m16 0V9a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v1m16 0H4M7 14h3"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgCreditCard);
export default ForwardRef;
