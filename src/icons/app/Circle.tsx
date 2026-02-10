import Svg, { Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCircle = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect width={16} height={16} x={4} y={4} fill="currentColor" rx={8} />
  </Svg>
);
const ForwardRef = forwardRef(SvgCircle);
export default ForwardRef;
