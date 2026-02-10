import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMicrophone = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M9 7a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M18 11v0a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v0M12 17v3m0 0h-2m2 0h2"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMicrophone);
export default ForwardRef;
