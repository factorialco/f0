import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgInputField = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M9 6h6M9 18h6M12 6v12M8 9H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2M16 15h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgInputField);
export default ForwardRef;
