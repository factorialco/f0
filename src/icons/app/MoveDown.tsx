import Svg, { Path, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMoveDown = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M12.5 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8 19 2-2-2-2"
    />
    <Rect
      width={6.7}
      height={6.7}
      x={0.65}
      y={-0.65}
      fill="currentColor"
      stroke="currentColor"
      rx={1.35}
      transform="matrix(1 0 0 -1 12 19.7)"
    />
    <Rect
      width={6.7}
      height={6.7}
      x={0.65}
      y={-0.65}
      stroke="currentColor"
      rx={1.35}
      transform="matrix(1 0 0 -1 12 9.7)"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMoveDown);
export default ForwardRef;
