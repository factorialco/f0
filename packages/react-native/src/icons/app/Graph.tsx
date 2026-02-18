import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgGraph = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M4 6v9a3 3 0 0 0 3 3h13"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8 14 3.646-3.646a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 0 .708 0L20 8m0 0v3m0-3h-3"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgGraph);
export default ForwardRef;
