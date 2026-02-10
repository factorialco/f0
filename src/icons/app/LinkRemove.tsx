import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgLinkRemove = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="m5 5 1 1M9 5V4M5 9H4M19 19l-1-1M15 19v1M19 15h1M12 17l-1 1a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l1-1M12 7l1-1a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-1 1"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgLinkRemove);
export default ForwardRef;
