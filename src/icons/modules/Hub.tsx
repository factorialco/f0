import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgHub = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <G fill="currentColor" filter="url(#Hub_svg__a)">
      <Path d="M4.5 7.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M4.5 15A1.5 1.5 0 0 1 6 13.5h3a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 9 19.5H6A1.5 1.5 0 0 1 4.5 18zM13.5 6A1.5 1.5 0 0 1 15 4.5h3A1.5 1.5 0 0 1 19.5 6v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 13.5 9zM13.5 15a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5z" />
    </G>
    <Defs></Defs>
  </Svg>
);
const ForwardRef = forwardRef(SvgHub);
export default ForwardRef;
