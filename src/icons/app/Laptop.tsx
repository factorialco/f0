import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgLaptop = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M5 15V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8M18 19H6a3 3 0 0 1-3-3 1 1 0 0 1 1-1h5.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5H20a1 1 0 0 1 1 1 3 3 0 0 1-3 3Z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgLaptop);
export default ForwardRef;
