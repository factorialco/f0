import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgProfile = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M4.965 17.702C6.663 16.138 9.127 14.5 12 14.5s5.337 1.638 7.035 3.202c1.175 1.082.325 2.798-1.272 2.798H6.237c-1.597 0-2.447-1.716-1.272-2.798"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgProfile);
export default ForwardRef;
