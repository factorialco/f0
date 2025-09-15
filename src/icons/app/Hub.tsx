import Svg, { Rect } from "react-native-svg";
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
    <Rect
      width={6}
      height={6}
      x={4.5}
      y={4.5}
      stroke="currentColor"
      strokeLinejoin="round"
      rx={3}
    />
    <Rect
      width={6}
      height={6}
      x={4.5}
      y={13.5}
      stroke="currentColor"
      strokeLinejoin="round"
      rx={1.5}
    />
    <Rect
      width={6}
      height={6}
      x={13.5}
      y={4.5}
      stroke="currentColor"
      strokeLinejoin="round"
      rx={1.5}
    />
    <Rect
      width={6}
      height={6}
      x={13.5}
      y={13.5}
      stroke="currentColor"
      strokeLinejoin="round"
      rx={1.5}
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgHub);
export default ForwardRef;
