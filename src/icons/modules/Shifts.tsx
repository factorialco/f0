import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgShifts = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.65 5A3.65 3.65 0 0 0 2 8.65V15a3.65 3.65 0 0 0 3.65 3.65h6.98a5.8 5.8 0 0 1 7.02-8.538V8.65A3.65 3.65 0 0 0 16 5zM5 9.65A.65.65 0 0 1 5.65 9h4a.65.65 0 1 1 0 1.3h-4A.65.65 0 0 1 5 9.65M5 14a.65.65 0 0 1 .65-.65h2a.65.65 0 1 1 0 1.3h-2A.65.65 0 0 1 5 14"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.5 11a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 2.35a.65.65 0 0 1 .65.65v1.054c0 .061.03.118.082.152l1.128.753a.65.65 0 0 1-.72 1.082l-1.13-.753a1.48 1.48 0 0 1-.66-1.234V14a.65.65 0 0 1 .65-.65"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgShifts);
export default ForwardRef;
