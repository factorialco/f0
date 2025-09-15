import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMessages = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M14 17v-3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.793a.5.5 0 0 0 .854.353L7 19h5a2 2 0 0 0 2-2M10 9V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5.793a.5.5 0 0 1-.854.353L17 12h-.5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMessages);
export default ForwardRef;
