import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgOlList = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M7 4v6M13 7h6M13 12h6M13 17h6M5 14a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2v0a2 2 0 0 0-2 2v1h4M5 6c1 0 2-1 2-2"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgOlList);
export default ForwardRef;
