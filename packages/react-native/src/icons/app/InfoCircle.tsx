import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgInfoCircle = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8.65-2.9a.65.65 0 1 0 1.3 0V9a.65.65 0 1 0-1.3 0zm0 6a.65.65 0 1 0 1.3 0v-3a.65.65 0 1 0-1.3 0z"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgInfoCircle);
export default ForwardRef;
