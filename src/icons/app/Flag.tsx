import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgFlag = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M6 5.5c3.5-1 5-.5 6.5.5S16 7 18 5.5V15c-2 1.5-4 1.5-5.5.5S9.5 14 6 15M6 4v16"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgFlag);
export default ForwardRef;
