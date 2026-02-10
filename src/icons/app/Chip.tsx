import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgChip = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect width={12} height={12} x={6} y={6} stroke="currentColor" rx={3} />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M9 6V4M9 20v-2M18 9h2M4 9h2M15 6V4M15 20v-2M18 15h2M4 15h2M12 9l-3 3M15 12l-3 3"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgChip);
export default ForwardRef;
