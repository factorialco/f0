import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgArchiveOpen = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="m3.876 10.008-.252-2.016a1 1 0 0 1 .868-1.116l14.016-1.752a1 1 0 0 1 1.116.868l.252 2.016a1 1 0 0 1-.868 1.116L4.992 10.876a1 1 0 0 1-1.116-.868M19 12v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-4M14 14h-4"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgArchiveOpen);
export default ForwardRef;
