import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgBuilding = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="m5.53 6.64 5-2.813a3 3 0 0 1 2.94 0l5 2.813A3 3 0 0 1 20 9.255v5.49a3 3 0 0 1-1.53 2.615l-5 2.813a3 3 0 0 1-2.94 0l-5-2.813A3 3 0 0 1 4 14.746V9.255A3 3 0 0 1 5.53 6.64M5 8l7 4m0 8v-8m7-4-7 4"
    />
    <Path
      fill="currentColor"
      d="M15 15.066v3.168a1 1 0 0 0 1.515.857l.5-.3a1 1 0 0 0 .485-.857v-4.05a.5.5 0 0 0-.757-.43l-1.257.755a1 1 0 0 0-.486.857"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgBuilding);
export default ForwardRef;
