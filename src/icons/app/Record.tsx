import Svg, { Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgRecord = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle cx={12} cy={12} r={8} stroke="currentColor" />
    <Circle cx={12} cy={12} r={6} fill="currentColor" />
  </Svg>
);
const ForwardRef = forwardRef(SvgRecord);
export default ForwardRef;
