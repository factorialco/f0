import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgBank = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect width={16} height={4} x={4} y={16} stroke="currentColor" rx={1} />
    <Path
      stroke="currentColor"
      d="M4 5.78a1 1 0 0 1 .757-.97l7-1.75a1 1 0 0 1 .486 0l7 1.75a1 1 0 0 1 .757.97V8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM6 9v7M18 9v7M14 9v7M10 9v7"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgBank);
export default ForwardRef;
