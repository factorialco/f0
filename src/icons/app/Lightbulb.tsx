import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgLightbulb = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path stroke="currentColor" d="M8 16h8v1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3z" />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16v-4.5m0 0-1.5-1m1.5 1 1.5-1"
    />
    <Path
      stroke="currentColor"
      d="M8 16v-2.08a1.1 1.1 0 0 0-.322-.758 6 6 0 1 1 8.644 0 1.1 1.1 0 0 0-.322.757V16"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgLightbulb);
export default ForwardRef;
