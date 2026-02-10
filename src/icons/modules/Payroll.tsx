import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPayroll = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.046 4.51A3.046 3.046 0 0 0 3 7.556v6.092a3.046 3.046 0 0 0 3.046 3.045h9.137a3.046 3.046 0 0 0 3.046-3.046V7.557a3.046 3.046 0 0 0-3.046-3.046zm4.569 2.284c.42 0 .761.341.761.762h.761a.761.761 0 0 1 0 1.523h-1.903a.38.38 0 0 0 0 .761h.761a1.904 1.904 0 0 1 .381 3.77v.038a.761.761 0 0 1-1.523 0h-.761a.761.761 0 1 1 0-1.523h1.903a.38.38 0 0 0 0-.762h-.761a1.904 1.904 0 0 1-.38-3.77v-.037c0-.42.34-.762.76-.762"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M21 9.586a.761.761 0 1 0-1.523 0v4.57a3.807 3.807 0 0 1-3.807 3.806H8.055a.761.761 0 1 0 0 1.523h7.615a5.33 5.33 0 0 0 5.33-5.33z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPayroll);
export default ForwardRef;
