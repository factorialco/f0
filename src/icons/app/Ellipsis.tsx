import Svg, { Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgEllipsis = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={1.5}
      fill="currentColor"
      transform="rotate(90 12 12)"
    />
    <Circle
      cx={12}
      cy={6.5}
      r={1.5}
      fill="currentColor"
      transform="rotate(90 12 6.5)"
    />
    <Circle
      cx={12}
      cy={17.5}
      r={1.5}
      fill="currentColor"
      transform="rotate(90 12 17.5)"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgEllipsis);
export default ForwardRef;
