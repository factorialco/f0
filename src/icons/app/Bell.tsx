import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgBell = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M9.764 18c.549.614 1.347 1 2.236 1 .888 0 1.687-.386 2.236-1"
    />
    <Path
      stroke="currentColor"
      d="M12 4a5 5 0 0 0-5 5v.726c0 .175-.07.344-.194.468l-.774.774A2.362 2.362 0 0 0 7.702 15h8.596a2.362 2.362 0 0 0 1.67-4.032l-.774-.774A.66.66 0 0 1 17 9.726V9a5 5 0 0 0-5-5Z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgBell);
export default ForwardRef;
