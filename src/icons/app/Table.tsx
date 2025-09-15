import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgTable = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M4 9.5V17a2 2 0 0 0 2 2h6M4 9.5V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2.5m-16 0h8m8 0V17a2 2 0 0 1-2 2h-6m8-9.5h-8M4 14h16m-8 5V9.5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgTable);
export default ForwardRef;
