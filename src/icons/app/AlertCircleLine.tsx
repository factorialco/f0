import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgAlertCircleLine = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle cx={12} cy={12} r={8} stroke="currentColor" />
    <Path stroke="currentColor" strokeLinecap="round" d="M12 12V9M12 15.1V15" />
  </Svg>
);
const ForwardRef = forwardRef(SvgAlertCircleLine);
export default ForwardRef;
