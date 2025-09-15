import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPauseCircle = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16M10 8.35a.65.65 0 0 1 .65.65v6a.65.65 0 1 1-1.3 0V9a.65.65 0 0 1 .65-.65m4.65.65a.65.65 0 1 0-1.3 0v6a.65.65 0 1 0 1.3 0z"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPauseCircle);
export default ForwardRef;
