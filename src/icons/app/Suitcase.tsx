import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSuitcase = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect width={16} height={12} x={4} y={7.5} stroke="currentColor" rx={3} />
    <Path stroke="currentColor" d="M9 7.5v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M20 12.5H4M11 12.5v1.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V12.5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSuitcase);
export default ForwardRef;
