import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgInfo = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M10 10h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1 4M12 7v.1"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgInfo);
export default ForwardRef;
