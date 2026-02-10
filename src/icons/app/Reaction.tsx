import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgReaction = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M19 12a7 7 0 1 1-7-7"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M10 10v1M14 10v1M9.5 14v0a4 4 0 0 0 5 0v0"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 3v3m0 3V6m0 0h-3 6"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgReaction);
export default ForwardRef;
