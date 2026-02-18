import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCheckCircle = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-3.48-2.61a.65.65 0 1 0-1.04-.78l-4.05 5.4-2.47-2.47a.65.65 0 1 0-.92.92l3 3a.65.65 0 0 0 .98-.07z"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgCheckCircle);
export default ForwardRef;
