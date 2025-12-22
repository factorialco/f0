import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgHeadset = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M15 13.75c0-.966.746-1.75 1.667-1.75C18.507 12 20 13.567 20 15.5S18.508 19 16.667 19c-.92 0-1.667-.784-1.667-1.75zM9 13.75C9 12.784 8.254 12 7.333 12 5.493 12 4 13.567 4 15.5S5.492 19 7.333 19C8.253 19 9 18.216 9 17.25z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 15v-2.75C4 7.694 7.582 4 12 4s8 3.694 8 8.25V15"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgHeadset);
export default ForwardRef;
