import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgHeading2 = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M4 7v5m0 5v-5m0 0h7V7v10M15 9.5A2.5 2.5 0 0 1 17.5 7v0A2.5 2.5 0 0 1 20 9.5v0a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 0-2.5 2.5V17h5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgHeading2);
export default ForwardRef;
