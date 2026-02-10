import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgDropdownOpen = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect
      width={16}
      height={16}
      x={4}
      y={4}
      fill="#052657"
      fillOpacity={0.06}
      rx={4}
    />
    <Path stroke="currentColor" d="m15.5 13.75-3.5-3.5-3.5 3.5" />
  </Svg>
);
const ForwardRef = forwardRef(SvgDropdownOpen);
export default ForwardRef;
