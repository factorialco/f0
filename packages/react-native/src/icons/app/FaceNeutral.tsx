import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgFaceNeutral = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18M8 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm2-6a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgFaceNeutral);
export default ForwardRef;
