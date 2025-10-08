import Svg, { Path, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSearch = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path stroke="currentColor" strokeLinecap="round" d="m16 16 3 3" />
    <Rect width={14} height={14} x={4} y={4} stroke="currentColor" rx={7} />
  </Svg>
);
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;
