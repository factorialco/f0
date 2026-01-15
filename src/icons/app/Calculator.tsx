import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCalculator = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect width={12} height={16} x={6} y={4} stroke="currentColor" rx={3} />
    <Path stroke="currentColor" d="M18 8H6M14 8v12M10 8v12M18 12H6M14 16H6" />
  </Svg>
);
const ForwardRef = forwardRef(SvgCalculator);
export default ForwardRef;
