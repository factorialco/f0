import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgDownload = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M19 15v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1M12 5v9m0 0-3-3m3 3 3-3"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgDownload);
export default ForwardRef;
