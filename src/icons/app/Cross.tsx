import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCross = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M16.95 7.05 12 12l-4.95 4.95M12 12 7.05 7.05l9.9 9.9"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgCross);
export default ForwardRef;
