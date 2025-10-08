import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgAlertCircle = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-.967-11.94a.97.97 0 1 1 1.935 0l-.303 3.9a.667.667 0 0 1-1.33 0zM13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgAlertCircle);
export default ForwardRef;
