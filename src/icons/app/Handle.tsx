import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgHandle = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 10 14"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M.5 1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M.5 7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M2 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M6.5 1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m0 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M8 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgHandle);
export default ForwardRef;
