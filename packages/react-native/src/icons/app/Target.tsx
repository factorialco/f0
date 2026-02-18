import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgTarget = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="m12 12 3-3m0 0V6l3-3 1 2 2 1-3 3z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M19 12a7 7 0 1 1-7-7"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M15.5 12A3.5 3.5 0 1 1 12 8.5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgTarget);
export default ForwardRef;
