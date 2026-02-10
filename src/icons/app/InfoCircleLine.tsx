import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgInfoCircleLine = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12 12v3"
    />
    <Circle cx={12} cy={12} r={8} stroke="currentColor" />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v.1"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgInfoCircleLine);
export default ForwardRef;
