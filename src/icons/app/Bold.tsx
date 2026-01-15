import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgBold = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M12.5 11.5a3 3 0 1 0 0-6H9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h6"
    />
    <Path
      stroke="currentColor"
      d="M14.833 18.5c2.025 0 3.667-1.567 3.667-3.5s-1.642-3.5-3.667-3.5H7.5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgBold);
export default ForwardRef;
