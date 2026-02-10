import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSplit = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M5 12h4l1.619-2.59A3 3 0 0 1 13.163 8H19m0 0-2-2m2 2-2 2M19 16h-5.837a3 3 0 0 1-2.544-1.41L9 12H5m14 4-2-2m2 2-2 2"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSplit);
export default ForwardRef;
