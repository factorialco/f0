import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCameraPlus = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M20 10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h.28a1 1 0 0 0 .948-.684l.088-.265A3 3 0 0 1 11.162 4H14"
    />
    <Circle cx={12} cy={12} r={3} stroke="currentColor" strokeLinecap="round" />
    <Path stroke="currentColor" strokeLinecap="round" d="M19 6.5h-3M17.5 8V5" />
  </Svg>
);
const ForwardRef = forwardRef(SvgCameraPlus);
export default ForwardRef;
