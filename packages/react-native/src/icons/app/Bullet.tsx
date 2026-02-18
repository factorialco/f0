import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgBullet = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 20 20"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10 7c-2.25 0-3 .75-3 3s.75 3 3 3 3-.75 3-3-.75-3-3-3"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgBullet);
export default ForwardRef;
