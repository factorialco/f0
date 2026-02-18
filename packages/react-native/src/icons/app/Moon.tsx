import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMoon = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M20 15.075A8.37 8.37 0 0 1 8.925 4 8.37 8.37 0 1 0 20 15.075"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMoon);
export default ForwardRef;
