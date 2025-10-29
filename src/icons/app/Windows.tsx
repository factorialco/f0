import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgWindows = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="m20 4-8.537 1.247v6.16H20zm0 16.25v-7.524l-8.537-.016v6.19zm-9.671-7.587v6.129l-6.324-.885v-5.275zm0-7.307L4 6.24l.003 5.244h6.326z"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgWindows);
export default ForwardRef;
