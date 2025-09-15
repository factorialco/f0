import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgExit = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M10 12h9m0 0-3-3m3 3-3 3M11 19H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgExit);
export default ForwardRef;
