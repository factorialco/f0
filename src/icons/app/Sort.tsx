import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSort = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M16 9v9m0 0-3-3m3 3 3-3M8 15V6m0 0L5 9m3-3 3 3"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSort);
export default ForwardRef;
