import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMasonry = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M5 6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM5 14a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM14 16a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zM14 6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMasonry);
export default ForwardRef;
