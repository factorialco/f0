import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPlus = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12.65 5a.65.65 0 1 0-1.3 0v6.35H5a.65.65 0 1 0 0 1.3h6.35V19a.65.65 0 1 0 1.3 0v-6.35H19a.65.65 0 1 0 0-1.3h-6.35z"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;
