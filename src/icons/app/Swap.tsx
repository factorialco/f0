import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSwap = (props: SvgProps, ref: Ref<Svg>) => (
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
      strokeLinejoin="round"
      d="M15 16H6m0 0 3-3m-3 3 3 3M9 8h9m0 0-3-3m3 3-3 3"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSwap);
export default ForwardRef;
