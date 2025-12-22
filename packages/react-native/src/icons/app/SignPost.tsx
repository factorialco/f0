import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSignPost = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path stroke="currentColor" strokeLinecap="round" d="M9 20h6" />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20v-7M12 6V3M16.558 13H5.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C4 12.24 4 11.96 4 11.4V7.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C4.76 6 5.04 6 5.6 6h10.958c.546 0 .82 0 1.073.068a2 2 0 0 1 .627.291c.216.15.392.359.744.776h0L21 9.5l-1.998 2.365c-.352.417-.528.626-.744.776a2 2 0 0 1-.627.291c-.254.068-.527.068-1.073.068"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSignPost);
export default ForwardRef;
