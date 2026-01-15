import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCompleted = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.65 12a7.35 7.35 0 1 1 14.7 0 7.35 7.35 0 0 1-14.7 0M12 3.35a8.65 8.65 0 1 0 0 17.3 8.65 8.65 0 0 0 0-17.3M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgCompleted);
export default ForwardRef;
