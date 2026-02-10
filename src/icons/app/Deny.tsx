import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgDeny = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 20 20"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.983 10a6.017 6.017 0 0 1 9.787-4.69l-8.46 8.46A6 6 0 0 1 3.983 10m2.247 4.69a6.017 6.017 0 0 0 8.46-8.46zM10 2.682a7.317 7.317 0 1 0 0 14.634 7.317 7.317 0 0 0 0-14.634"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgDeny);
export default ForwardRef;
