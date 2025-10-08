import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgEnvelope = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect width={16} height={12} x={4} y={6} stroke="currentColor" rx={3} />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="m4.5 9.5 6.654 3.105a2 2 0 0 0 1.692 0L19.5 9.5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgEnvelope);
export default ForwardRef;
