import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgHome = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="m6.256 7.603 4-2.857a3 3 0 0 1 3.488 0l4 2.857A3 3 0 0 1 19 10.043V16a3 3 0 0 1-3 3h-1a1 1 0 0 1-1-1v-2.5a2 2 0 1 0-4 0V18a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3v-5.956a3 3 0 0 1 1.256-2.441Z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;
