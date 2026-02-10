import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSleep = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M10.5 20.5h-7l7-7h-7M20.5 10.5h-7l7-7h-7"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSleep);
export default ForwardRef;
