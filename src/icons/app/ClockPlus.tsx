import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgClockPlus = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M13 19.938Q12.508 20 12 20a8 8 0 1 1 7.91-6.793"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3l3.5 2"
    />
    <Path stroke="currentColor" strokeLinecap="round" d="M16 18h4M18 16v4" />
  </Svg>
);
const ForwardRef = forwardRef(SvgClockPlus);
export default ForwardRef;
