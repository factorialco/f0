import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCoffee = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M6 17V8.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M8 2v0a1.414 1.414 0 0 0 0 2v0M12 2v0a1.414 1.414 0 0 0 0 2v0M16 11h1.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H16"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgCoffee);
export default ForwardRef;
