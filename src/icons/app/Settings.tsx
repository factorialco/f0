import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSettings = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M10.304 4.716a2 2 0 0 1 3.392 0l.74 1.185a2 2 0 0 0 1.628.94l1.396.048a2 2 0 0 1 1.696 2.938l-.656 1.234a2 2 0 0 0 0 1.878l.656 1.234a2 2 0 0 1-1.696 2.938l-1.396.048a2 2 0 0 0-1.628.94l-.74 1.185a2 2 0 0 1-3.392 0l-.74-1.185a2 2 0 0 0-1.627-.94l-1.397-.048a2 2 0 0 1-1.696-2.938l.656-1.234a2 2 0 0 0 0-1.878l-.656-1.234A2 2 0 0 1 6.54 6.89l1.397-.048a2 2 0 0 0 1.627-.94z"
    />
    <Circle cx={11.999} cy={12} r={2.5} stroke="currentColor" />
  </Svg>
);
const ForwardRef = forwardRef(SvgSettings);
export default ForwardRef;
