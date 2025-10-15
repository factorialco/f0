import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgQuote = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M10 6a5 5 0 0 0-5 5v2m0 0v2.5A2.5 2.5 0 0 0 7.5 18v0a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 7.5 13zM19 6a5 5 0 0 0-5 5v2m0 0v2.5a2.5 2.5 0 0 0 2.5 2.5v0a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgQuote);
export default ForwardRef;
