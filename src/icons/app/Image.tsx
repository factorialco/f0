import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgImage = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M4 15V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z"
    />
    <Path stroke="currentColor" d="m20 15-1.879-1.879a3 3 0 0 0-4.242 0L9 18" />
    <Circle cx={9} cy={11} r={2.35} stroke="currentColor" />
  </Svg>
);
const ForwardRef = forwardRef(SvgImage);
export default ForwardRef;
