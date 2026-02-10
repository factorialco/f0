import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgHeart = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M15.063 6C12.875 6 12 8 12 8s-.875-2-3.062-2C7.188 6 5 7.714 5 10.286 5 14.57 12 19 12 19s7-4.429 7-8.714C19 8.143 17.25 6 15.063 6"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgHeart);
export default ForwardRef;
