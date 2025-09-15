import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgClockIn = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-7-3a1 1 0 1 0-2 0v2.465a2 2 0 0 0 .89 1.664l2.555 1.703a1 1 0 0 0 1.11-1.664L13 11.465z"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgClockIn);
export default ForwardRef;
