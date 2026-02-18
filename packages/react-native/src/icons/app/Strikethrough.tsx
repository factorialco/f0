import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgStrikethrough = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M15 7.5A2.19 2.19 0 0 0 12.919 6h-1.313a3 3 0 0 0-2.497 1.336v0a3 3 0 0 0 0 3.328v0A3 3 0 0 0 11.606 12h.788a3 3 0 0 1 2.497 1.336v0a3 3 0 0 1 0 3.328v0A3 3 0 0 1 12.394 18h-1.313A2.19 2.19 0 0 1 9 16.5v0M19 12H5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgStrikethrough);
export default ForwardRef;
