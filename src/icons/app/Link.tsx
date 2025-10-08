import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgLink = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M11 18v0a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l3-3a2.83 2.83 0 0 1 4 0v0"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M13 6v0a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-3 3a2.83 2.83 0 0 1-4 0v0"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;
