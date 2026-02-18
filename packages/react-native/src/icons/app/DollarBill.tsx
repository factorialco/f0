import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgDollarBill = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M14 9h-2.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H10"
    />
    <Path stroke="currentColor" strokeLinecap="round" d="M7 12v.1M17 12v.1" />
  </Svg>
);
const ForwardRef = forwardRef(SvgDollarBill);
export default ForwardRef;
