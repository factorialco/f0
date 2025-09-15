import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgVideoRecorder = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect
      width={13}
      height={12}
      x={4}
      y={6}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={3}
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m17 11 4-2v6l-4-2z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgVideoRecorder);
export default ForwardRef;
