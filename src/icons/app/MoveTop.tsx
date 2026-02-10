import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMoveTop = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M13 19H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.8"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8 3 2 2-2 2"
    />
    <Path
      fill="currentColor"
      stroke="currentColor"
      d="M14 2.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 7.35h-4A1.35 1.35 0 0 1 12.65 6V4c0-.746.604-1.35 1.35-1.35Z"
    />
    <Path
      stroke="currentColor"
      d="M14 9.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 14.35h-4A1.35 1.35 0 0 1 12.65 13v-2c0-.746.604-1.35 1.35-1.35ZM14 16.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 21.35h-4A1.35 1.35 0 0 1 12.65 20v-2c0-.746.604-1.35 1.35-1.35Z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMoveTop);
export default ForwardRef;
