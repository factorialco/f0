import Svg, { Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgEllipsisHorizontal = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle cx={12} cy={12} r={1.5} fill="currentColor" />
    <Circle cx={6.5} cy={12} r={1.5} fill="currentColor" />
    <Circle cx={17.5} cy={12} r={1.5} fill="currentColor" />
  </Svg>
);
const ForwardRef = forwardRef(SvgEllipsisHorizontal);
export default ForwardRef;
