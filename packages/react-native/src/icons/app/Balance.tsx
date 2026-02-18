import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgBalance = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M10 19h4M12 13v6M5 12.5l14 1"
    />
    <Circle cx={7.5} cy={6.5} r={2.5} stroke="currentColor" />
    <Circle
      cx={17}
      cy={7.5}
      r={2.5}
      fill="currentColor"
      stroke="currentColor"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgBalance);
export default ForwardRef;
