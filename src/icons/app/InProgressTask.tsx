import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgInProgressTask = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle cx={12} cy={12} r={8} stroke="currentColor" />
    <Path fill="currentColor" d="M12 18a6 6 0 0 0 0-12z" />
  </Svg>
);
const ForwardRef = forwardRef(SvgInProgressTask);
export default ForwardRef;
