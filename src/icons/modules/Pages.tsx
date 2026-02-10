import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPages = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12.758 3.35a3.65 3.65 0 0 1 2.58 1.069l2.243 2.243a3.65 3.65 0 0 1 1.07 2.58V17A3.65 3.65 0 0 1 15 20.65H9A3.65 3.65 0 0 1 5.35 17V7A3.65 3.65 0 0 1 9 3.35zM10 15.35a.65.65 0 0 0 0 1.3h2l.13-.013a.65.65 0 0 0 0-1.274L12 15.35zm0-4a.65.65 0 0 0 0 1.3h4l.13-.013a.65.65 0 0 0 0-1.274L14 11.35z"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPages);
export default ForwardRef;
