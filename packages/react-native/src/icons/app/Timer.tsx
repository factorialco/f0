import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgTimer = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle cx={12} cy={13} r={7.35} stroke="currentColor" />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M12 10.33v2.667l3 1.666"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 5.5V3M10 3h4M19.09 6l1.414 1.414M4.91 6 3.496 7.414"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgTimer);
export default ForwardRef;
