import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSolidPause = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M6 17V7a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0M14 17V7a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSolidPause);
export default ForwardRef;
