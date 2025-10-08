import Svg, { Path, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPin = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12 20c3-3.2 6-6.065 6-9.6S15.314 4 12 4s-6 2.865-6 6.4 3 6.4 6 9.6"
    />
    <Rect width={4} height={4} x={10} y={8} stroke="currentColor" rx={2} />
  </Svg>
);
const ForwardRef = forwardRef(SvgPin);
export default ForwardRef;
