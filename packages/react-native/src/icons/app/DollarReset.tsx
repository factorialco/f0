import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgDollarReset = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M14.5 9H11a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3H9.5M12 9V8M12 16v-1"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M20 12a8 8 0 1 0-2.5 5.81"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m18 10.5 2 2 2-2"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgDollarReset);
export default ForwardRef;
