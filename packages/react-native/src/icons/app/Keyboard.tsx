import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgKeyboard = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect width={16} height={12} x={4} y={7} stroke="currentColor" rx={3} />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M8 11h1M15 11h1M15 15h1M11.5 11h1M8 15h4.5M12 7V5.5a1 1 0 0 1 1-1h.5a1 1 0 0 0 1-1V3"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgKeyboard);
export default ForwardRef;
