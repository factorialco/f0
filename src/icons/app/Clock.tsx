import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgClock = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle cx={12} cy={12} r={8} stroke="currentColor" />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3l3.5 2"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgClock);
export default ForwardRef;
