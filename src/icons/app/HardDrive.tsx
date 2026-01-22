import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgHardDrive = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M4 14h16v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 20 16.88 20 15.2 20H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 17.72 4 16.88 4 15.2z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M7 17h1M10 17h1M4 14l1.932-7.728A3 3 0 0 1 8.842 4h6.316a3 3 0 0 1 2.91 2.272L20 14"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgHardDrive);
export default ForwardRef;
