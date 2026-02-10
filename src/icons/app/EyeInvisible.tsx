import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgEyeInvisible = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M19.592 7.665c-1.274 2.632-4.038 5-7.592 5s-6.318-2.368-7.592-5"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="m10.008 13.016-1.11 3.32M14.058 13.016l1.11 3.32M17.523 10.543 20 13.016M6.477 10.543 4 13.016"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgEyeInvisible);
export default ForwardRef;
