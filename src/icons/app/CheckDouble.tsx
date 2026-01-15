import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCheckDouble = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="m12 18 7.5-10M4.5 13l3.178 3.178a1 1 0 0 0 1.512-.114L15.5 7.5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgCheckDouble);
export default ForwardRef;
