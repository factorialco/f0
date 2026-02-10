import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMinimize = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="m19 5-5.5 5.5m0 0h4m-4 0v-4M5 19l5.5-5.5m0 0h-4m4 0v4"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMinimize);
export default ForwardRef;
