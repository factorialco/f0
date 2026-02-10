import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgArrowCycle = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12.038 4.998a7.002 7.002 0 0 0-4.932 12.01m9.788-10.015a7 7 0 0 1 1.345 1.833 7.002 7.002 0 0 1-6.277 10.176"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.516 15.426-.58 2.769-2.768-.58M16.14 9.236l.58-2.769 2.768.579"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgArrowCycle);
export default ForwardRef;
