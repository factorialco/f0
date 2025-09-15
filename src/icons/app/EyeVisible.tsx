import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgEyeVisible = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M20 12c-1-3-4-6-8-6s-7 3-8 6c1 3 4 6 8 6s7-3 8-6Z"
    />
    <Circle cx={12} cy={12} r={2.35} stroke="currentColor" />
  </Svg>
);
const ForwardRef = forwardRef(SvgEyeVisible);
export default ForwardRef;
