import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgWallet = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M4 7v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-1"
    />
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M6 5h9a2 2 0 0 1 2 2v2H6a2 2 0 1 1 0-4Z"
    />
    <Circle cx={16.25} cy={13.75} r={1.25} fill="currentColor" />
  </Svg>
);
const ForwardRef = forwardRef(SvgWallet);
export default ForwardRef;
