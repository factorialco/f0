import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgUpload = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12 14V5m0 0L9 8m3-3 3 3M19 15v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgUpload);
export default ForwardRef;
