import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCardPin = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M7 6h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M8 12v.1M12 12v.1M16 12v.1"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgCardPin);
export default ForwardRef;
