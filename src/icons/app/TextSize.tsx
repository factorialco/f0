import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgTextSize = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M4 6h5m5 0H9m0 0v12m4-6h3m3 0h-3m0 0v6"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgTextSize);
export default ForwardRef;
