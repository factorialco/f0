import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgBriefcase = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect width={16} height={12} x={4} y={7} stroke="currentColor" rx={3} />
    <Path stroke="currentColor" d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
    <Path stroke="currentColor" strokeLinejoin="round" d="M8 7v12M16 7v12" />
  </Svg>
);
const ForwardRef = forwardRef(SvgBriefcase);
export default ForwardRef;
