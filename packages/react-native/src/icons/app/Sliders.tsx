import Svg, { Path, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSliders = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M8 13v8M16 3v8M8 3v1M16 20v1"
    />
    <Rect width={6} height={3} x={5} y={7} stroke="currentColor" rx={1.5} />
    <Rect width={6} height={3} x={13} y={14} stroke="currentColor" rx={1.5} />
  </Svg>
);
const ForwardRef = forwardRef(SvgSliders);
export default ForwardRef;
